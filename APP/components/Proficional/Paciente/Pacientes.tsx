import React, { useEffect, useState } from "react";
import { 
  View, Text, StyleSheet, FlatList, 
  TouchableOpacity, ActivityIndicator, 
  Alert
} from "react-native";
import axios from "axios";
import { getUrl } from "@/app/utils/url";

interface Paciente {
  id: number;
  tempoexperiencia: number;
  iduser: number;
}

interface Usuario {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  datanascimento: string;
}

interface PacienteComNome {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  datanascimento: string;
}

interface NumeroP {
  id: number;
  idprof: number;
  idpac: number;
}

export default function Paciente({ navigation ,route }) {
  const { idp, id } = route.params;
  const [paciente, setPaciente] = useState<PacienteComNome[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const Listaclientes = async () => {
    try {

      //Buscar a lista de NumeroP
      const NP = await axios.get<NumeroP[]>(`${getUrl()}/MindCare/API/numeroP/idprof/${idp}`);
      const listaPacientes = NP.data;

      // Buscar os nomes dos usuários relacionados
      const pacienteComNomes: PacienteComNome[] = await Promise.all(
        listaPacientes.map(async (Numero) => {
          try {
            const pacResponse = await axios.get<Paciente>(`${getUrl()}/MindCare/API/pacientes/${Numero.idpac}`);

            const userResponse = await axios.get<Usuario>(getUrl()+"/MindCare/API/users/"+pacResponse.data.iduser);

;            return {
              id: Numero.idprof,
              nome: userResponse.data.nome,
              email: userResponse.data.email,
              telefone: userResponse.data.telefone,
              datanascimento: userResponse.data.datanascimento ? userResponse.data.datanascimento.toString().split("T")[0] : "",
            };
          } catch (error) {
            console.error(`Erro ao buscar numeroP ${Numero.idpac}:`+error);
            return {
              id: Numero.idprof,
              nome: "Desconhecido",
              email: "Desconhecido",
              telefone: "Desconhecido",
              datanascimento: "Desconhecido",
            };
          }
        })
      );
      
      setPaciente(pacienteComNomes);
    } catch (error) {
      console.error("Erro ao buscar paciente:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    Listaclientes();
    const intervalo = setInterval(Listaclientes, 1000);
    return () => clearInterval(intervalo);
  }, [idp]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pacientes</Text>
      <View style={styles.Inf}>        
        

        {/* Profissionais */}
        <View>
          {loading ? (
            <ActivityIndicator size="large" color="#34C759" />
          ) : (
            <FlatList
              data={paciente}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Paciente", {
                    idu: id,
                    idp: idp,
                    id: item.id,
                    nome: item.nome,
                    email: item.email,
                    telefone: item.telefone,
                    datanascimento: item.datanascimento,
                  })}>
                  <Text style={styles.nome}>{item.nome}</Text>
                </TouchableOpacity>
              )}
            />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#37C231",
  },
  titulo: {
      fontSize: 25,
      marginBottom: 10,
      backgroundColor: '#37C231',
      color: '#fff',
      height: 40,
      textAlign: 'center'
  },
  card: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 20,
    marginTop: 5,
    marginHorizontal: 5,
    height: 70,
    justifyContent: 'center',
  },
  nome: {
    fontSize: 20,
    fontWeight: "bold",
  },
  Inf: {
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      backgroundColor: '#fff',
      height: '100%',
  },
});