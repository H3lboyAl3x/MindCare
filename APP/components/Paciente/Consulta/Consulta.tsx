import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
  useWindowDimensions,
  Image,
  Linking,
} from "react-native";
import axios from "axios";
import { getUrl } from "@/app/utils/url";

type Consulta = {
  id: number;
  data: string;
  hora: string;
  idpaci: number;
  idpro: number;
  status: string;
  link: string;
};

type AdiarProps = {
  selecionada: Consulta;
  idp: number;
  setModoAdiar: (v: boolean) => void;
  buscarConsultas: () => void;
  setSelecionada: (consulta: Consulta) => void;
};

export default function Consulta({ navigation, route }) {
  const { idp } = route.params;
  const [consultas, setConsultas] = useState<Consulta[]>([]);
  const [selecionada, setSelecionada] = useState<Consulta | null>(null);
  const [modoAdiar, setModoAdiar] = useState(false);
  const { width } = useWindowDimensions();
  const isWeb = Platform.OS === "web";

  const buscarConsultas = async () => {
    try {
      const responde = await axios.get<Consulta[]>(`${getUrl()}/MindCare/API/consultas`);
      const consultasseparada = responde.data;
      const consultasfiltrada = consultasseparada.filter(
        (consulta) => consulta.idpaci === idp && consulta.status === "Pendente"
      );
      setConsultas(consultasfiltrada);
    } catch (error) {
      console.error("Erro ao buscar consultas:", error);
    }
  };

  useEffect(() => {
    buscarConsultas();
    const intervalo = setInterval(buscarConsultas, 1000);
    return () => clearInterval(intervalo);
  }, [idp]);

  const Analisar = (consulta: Consulta) => {
    if (isWeb && width > 768) {
      setSelecionada(consulta);
    } else {
      navigation.navigate("AnalisarConsultas", {
        idConsulta: consulta.id,
        dataConsulta: consulta.data,
        horaConsulta: consulta.hora,
        idpaci: consulta.idpaci,
        idp: idp,
        statusConsulta: consulta.status,
        link: consulta.link,
      });
    }
  };
  const entrarNaChamada = async (consulta: Consulta) => {
    if (consulta.link) {
      Linking.openURL(consulta.link);
    } else {
      console.log('Nenhuma conferência encontrada');
    }
  };

  const renderAnalisarWeb = () => {
    if (!selecionada) {
      return (
        <View style={{ flex: 1, alignItems: "center", backgroundColor: "#e3e6e3" }}>
          <Text style={{ color: '#000' }}>
            Selecione uma consulta para visualizar os detalhes.
          </Text>
        </View>
      );
    }

    if (modoAdiar) {
      return (
        <AdiarConsultaInline
          selecionada={selecionada}
          idp={idp}
          setModoAdiar={setModoAdiar}
          buscarConsultas={buscarConsultas}
          setSelecionada={setSelecionada}
        />
      );
    }

    const formattedDate = new Date(selecionada.data).toISOString().split("T")[0];
    const formattedTime = selecionada.hora.slice(0, 5);

    return (
      <View style={{ flex: 1, backgroundColor: "#4CD964", padding: 20 }}>
        <Image
          source={{
            uri: "https://img.freepik.com/vetores-premium/trevo-com-quatro-folhas-isoladas-no-fundo-branco-conceito-da-sorte-no-estilo-cartoon-realista_302536-46.jpg",
          }}
          style={styles.logo}
        />
        <Text style={[styles.consultaText, { backgroundColor: '#2a8c26', textAlign: 'center', marginTop: 40 }]}>
          Data: {formattedDate}     |     Hora: {formattedTime}
        </Text>
        <View style={styles.Vbotao}>
          <TouchableOpacity style={[styles.botao, {backgroundColor: '#fff'}]} onPress={() => setModoAdiar(true)}>
            <Text style={[styles.buttonText, {color: '#4CD964'}]}>Adiar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.botao, { backgroundColor: '#fff' }]}
            onPress={() => entrarNaChamada(selecionada)}
          >
            <Text style={[styles.buttonText, { color: '#4CD964' }]}>Entrar</Text>
          </TouchableOpacity>


        </View>
      </View>
    );
  };

  const renderLista = () => (
    <>
      {consultas.length === 0 ? (
        <View>
          <Image
            source={{
              uri: "https://aebo.pt/wp-content/uploads/2024/05/spo-300x300.png",
            }}
            style={styles.logo}
          />
          <Text style={{ textAlign: "center", marginTop: 30, color: Platform.OS === 'web' ? "#000" : "#fff" }}>
            Marca uma consulta para começar a sua jornada de bem-estar!
          </Text>
        </View>
      ) : (
        <FlatList
          style={styles.Inf}
          data={consultas}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} onPress={() => Analisar(item)}>
              <View>
                <Text style={[styles.consultaText, { fontWeight: "bold", fontSize: 16 }]}>Consulta</Text>
                <Text style={styles.consultaText}>
                  Data: {item.data ? item.data.toString().split("T")[0] : ""}
                </Text>
                <Text style={styles.consultaText}>Hora: {item.hora.slice(0, 5)}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </>
  );  

  if (isWeb && width > 768) {
    return (
      <View style={[styles.container, { flexDirection: "row", marginTop: 60 }]}>
        <View style={{ width: "30%", borderRightWidth: 2, borderColor: "#2E8B57" }}>
          {renderLista()}
        </View>
        <View style={{ flex: 1 }}>{renderAnalisarWeb()}</View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Consultas</Text>
      {renderLista()}
    </View>
  );
}

const AdiarConsultaInline = ({ selecionada, idp, setModoAdiar, buscarConsultas, setSelecionada }: AdiarProps) => {
  const [datamarcacao, setDatan] = useState<Date | null>(
    selecionada?.data ? new Date(selecionada.data) : null
  );
  const [tempomarcacao, settempo] = useState<Date | null>(
    selecionada?.hora ? new Date(`1970-01-01T${selecionada.hora}`) : null
  );

  const Adiar = async () => {
    if (!datamarcacao || !tempomarcacao) {
      alert("Por favor, selecione a data e a hora antes de marcar a consulta.");
      return;
    }

    const formattedDate = datamarcacao.toISOString().split("T")[0];
    const formattedTime = tempomarcacao.toTimeString().slice(0, 5);

    try {
      await axios.put(`${getUrl()}/MindCare/API/consultas/${selecionada.id}`, {
        data: formattedDate,
        hora: formattedTime,
        idpaci: selecionada.idpaci,
        idpro: idp,
        status: "Pendente",
      });

      await buscarConsultas();
      setSelecionada({ ...selecionada, data: formattedDate, hora: formattedTime });
      setModoAdiar(false);
    } catch (error) {
      console.error("Erro ao adiar consulta:", error);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#fff", justifyContent: "center" }}>
      <Text style={{ fontSize: 24, textAlign: "center", color: "#4CD964" }}>Adiar Consulta</Text>

      <TouchableOpacity style={styles.input}>
        <input
          type="date"
          style={{
            width: '100%', height: '100%', border: 'none', backgroundColor: 'transparent',
            textAlign: 'center', color: datamarcacao ? '#4CD964' : '#6fcf87'
          }}
          value={datamarcacao ? datamarcacao.toISOString().split('T')[0] : ''}
          onChange={(e) => {
            const value = e.target.value;
            if (value) {
              setDatan(new Date(`${value}T00:00:00`));
            }
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.input}>
        <input
          type="time"
          style={{
            width: "100%", height: "100%", border: "none", backgroundColor: "transparent",
            textAlign: "center", color: tempomarcacao ? "#4CD964" : "#6fcf87"
          }}
          value={tempomarcacao ? tempomarcacao.toTimeString().slice(0, 5) : ""}
          onChange={(e) => {
            const [hours, minutes] = e.target.value.split(":");
            const novaHora = new Date();
            novaHora.setHours(parseInt(hours));
            novaHora.setMinutes(parseInt(minutes));
            novaHora.setSeconds(0);
            settempo(novaHora);
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={Adiar}>
        <Text style={styles.buttonText}>Confirmar Adiamento</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setModoAdiar(false)} style={[styles.botao, { marginTop: 10, backgroundColor: "#ccc" }]}>
        <Text style={[styles.buttonText, { color: "#4CD964" }]}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === 'web' ? "#fff" : "#2E8B57",
  },
  titulo: {
    fontSize: 25,
    marginBottom: 10,
    backgroundColor: "#4CD964",
    color: "#fff",
    height: 40,
    textAlign: "center",
  },
  logo: {
    width: 140,
    height: 140,
    borderRadius: 20,
    backgroundColor: "#e7fbe6",
    marginTop: 50,
    alignSelf: "center",
  },
  card: {
    padding: 15,
    backgroundColor: "#4CD964",
    height: 100,
    borderRadius: 20,
    marginTop: 5,
    marginHorizontal: 5,
  },
  consultaText: {
    fontSize: 14,
    color: "#fff",
  },
  Inf: {
    backgroundColor: Platform.OS === 'web' ? "#fff" : "#2E8B57",
  },
  Vbotao: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    marginTop: 200,
  },
  botao: {
    width: 200,
    height: 50,
    marginHorizontal: 25,
    backgroundColor: "#4CD964",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 50,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    height: 50,
    borderColor: "#4CD964",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 16,
    marginBottom: 16,
    justifyContent: "center",
  },
});
