import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ScrollView,
  Animated,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from "@expo/vector-icons";
import { getUrl } from '@/app/utils/url';

const image1Url = "https://img.freepik.com/vetores-premium/trevo-com-quatro-folhas-isoladas-no-fundo-branco-conceito-da-sorte-no-estilo-cartoon-realista_302536-46.jpg";
const image2Url = "https://aebo.pt/wp-content/uploads/2024/05/spo-300x300.png";

type Usuario = {
  id: number;
  nome: string;
  telefone: string;
  email: string;
  password: string;
  datanascimento: string;
  genero: string;
};

type Profissional = {
  id: number;
  tempoexperiencia: string;
  especialidade: string;
  iduser: number;
};

type Paciente = {
  id: number;
  iduser: number;
};

type Consulta = {
  id: number;
  data: string;
  hora: string;
  status: string;
  idprofissional: number;
  idpaciente: number;
};

type TipoAba = 'profissionais' | 'pacientes' | 'consultas';

export default function TelaInicio02({ navigation, route }) {
  const { id, email, password } = route.params;

  const [expandido, setExpandido] = useState(false);
  const [abaSelecionada, setAbaSelecionada] = useState<TipoAba | null>(null);
  const [dados, setDados] = useState<Profissional[] | Paciente[] | Consulta[]>([]);
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [profissionais, setProfissionais] = useState<Profissional[]>([]);
  const [pacientes, setPacientes] = useState<Paciente[]>([]);

  const widthAnim = useRef(new Animated.Value(Platform.OS === 'web' ? 5 : 25)).current;

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const [usuariosRes, profissionaisRes, pacientesRes] = await Promise.all([
          fetch(`${getUrl()}/MindCare/API/users`),
          fetch(`${getUrl()}/MindCare/API/profissionais`),
          fetch(`${getUrl()}/MindCare/API/pacientes`)
        ]);

        const usuariosJson = await usuariosRes.json();
        const profissionaisJson = await profissionaisRes.json();
        const pacientesJson = await pacientesRes.json();

        setUsuarios(usuariosJson);
        setProfissionais(profissionaisJson);
        setPacientes(pacientesJson);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    };

    carregarDados();
  }, []);

  const expandir = () => {
    Animated.timing(widthAnim, {
      toValue: 25,
      duration: 200,
      useNativeDriver: false,
    }).start();
    setExpandido(true);
  };

  const reduzir = () => {
    Animated.timing(widthAnim, {
      toValue: 5,
      duration: 200,
      useNativeDriver: false,
    }).start();
    setExpandido(false);
  };

  const buscarDados = async (tipo: TipoAba) => {
    let url = '';
    if (tipo === 'profissionais') url = `${getUrl()}/MindCare/API/profissionais`;
    if (tipo === 'pacientes') url = `${getUrl()}/MindCare/API/pacientes`;
    if (tipo === 'consultas') url = `${getUrl()}/MindCare/API/consultas`;

    try {
      const response = await fetch(url);
      const json = await response.json();
      let filtrados = json;

      if (tipo === 'consultas') {
        filtrados = json.filter((consulta: Consulta) => consulta.status === 'Pendente');
      }

      setDados(filtrados);
      setAbaSelecionada(tipo);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  const obterUsuario = (iduser: number) => usuarios.find(u => u.id === iduser);
  const obterNomeUsuario = (iduser: number) => obterUsuario(iduser)?.nome || 'Desconhecido';

  const obterNomeProfissional = (idprofissional: number) => {
    const prof = profissionais.find(p => p.id === idprofissional);
    if (!prof) return 'Desconhecido';
    return obterNomeUsuario(prof.iduser);
  };

  const obterNomePaciente = (idpaciente: number) => {
    const pac = pacientes.find(p => p.id === idpaciente);
    if (!pac) return 'Desconhecido';
    return obterNomeUsuario(pac.iduser);
  };

  const handlePressPaciente = (iduser: number) => {
    const user = obterUsuario(iduser);
    if (user) {
      navigation.navigate('ExibirInformacao', {
        id: user.id,
        idp: iduser,
        nome: user.nome,
        telefone: user.telefone,
        email: user.email,
        password: user.password,
        datanascimento: user.datanascimento,
        genero: user.genero,
        idadm: id,
      });
    }
  };

  const handlePressProfissional = (iduser: number, tempoexperiencia: string, especialidade: string) => {
    const user = obterUsuario(iduser);
    if (user) {
      navigation.navigate('ExibirInformacaop', {
        id: user.id,
        idp: iduser,
        nome: user.nome,
        telefone: user.telefone,
        email: user.email,
        password: user.password,
        datanascimento: user.datanascimento,
        genero: user.genero,
        espe: especialidade,
        expe: tempoexperiencia,
        idadm: id,
      });
    }
  };

  if (Platform.OS === 'web') {
    return (
      <ScrollView style={stylesweb.container}>
        <View style={stylesweb.header}>
          <Image source={{ uri: image1Url }} style={stylesweb.mainImage} />
          <Text style={stylesweb.title}>Espaço Gaya</Text>
          <TouchableOpacity style={{ marginLeft: 850 }} onPress={() => navigation.navigate('Selecao', { id, email, password })}>
            <LinearGradient colors={['#2E8B57', '#4CD964']} style={[stylesweb.button]}>
              <Text style={stylesweb.buttonText}>Registrar</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={stylesweb.menu}>
          <Animated.View
            style={{
              width: widthAnim.interpolate({
                inputRange: [5, 25],
                outputRange: ['5%', '25%'],
              }),
              backgroundColor: '#dbdbdb',
              borderRightWidth: 1,
              borderColor: '#8c8c8c',
              paddingTop: 20,
              height: 550,
            }}
            {...(Platform.OS === 'web'
              ? {
                onMouseEnter: expandir,
                onMouseLeave: reduzir,
              }
              : {}) as any}
          >
            <TouchableOpacity style={stylesweb.menuButton} onPress={() => buscarDados('profissionais')}>
              {expandido ? <Text style={{ color: '#fff' }}>Profissionais</Text> : <Ionicons name="people-circle-outline" size={24} color="white" />}
            </TouchableOpacity>

            <TouchableOpacity style={stylesweb.menuButton} onPress={() => buscarDados('pacientes')}>
              {expandido ? <Text style={{ color: '#fff' }}>Pacientes</Text> : <Ionicons name="people-circle-outline" size={24} color="white" />}
            </TouchableOpacity>

            <TouchableOpacity style={stylesweb.menuButton} onPress={() => buscarDados('consultas')}>
              {expandido ? <Text style={{ color: '#fff' }}>Consultas</Text> : <Ionicons name="people-circle-outline" size={24} color="white" />}
            </TouchableOpacity>
          </Animated.View>

          <View style={stylesweb.content}>
            {abaSelecionada && (
              <View style={stylesweb.grid}>
                {(dados as any[]).map((item, index) => {
                  const cardContent = (
                    <>
                      {abaSelecionada === 'profissionais' && (
                        <Text style={stylesweb.cardTitle}>Nome: {obterNomeUsuario(item.iduser)}</Text>
                      )}
                      {abaSelecionada === 'pacientes' && (
                        <Text style={stylesweb.cardTitle}>Nome: {obterNomeUsuario(item.iduser)}</Text>
                      )}
                      {abaSelecionada === 'consultas' && (
                        <>
                          <Text style={stylesweb.cardTitle}>Profissional: {obterNomeProfissional(item.idpro)}</Text>
                          <Text>Paciente: {obterNomePaciente(item.idpaci)}</Text>
                          <Text>Data: {item.data}</Text>
                          <Text>Hora: {item.hora}</Text>
                          <Text>Status: {item.status}</Text>
                        </>
                      )}
                    </>
                  );

                  return (
                    <TouchableOpacity
                      key={index}
                      style={stylesweb.card}
                      onPress={() => {
                        if (abaSelecionada === 'pacientes') handlePressPaciente(item.iduser);
                        if (abaSelecionada === 'profissionais') handlePressProfissional(item.iduser, item.tempoexperiencia, item.especialidade);
                      }}
                      disabled={abaSelecionada === 'consultas'}
                    >
                      {cardContent}
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const stylesweb = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#f4f4f4", 
    paddingTop: 20 
  },
  header: { 
    alignItems: "center", 
    flexDirection: 'row', 
    paddingHorizontal: 20, 
    backgroundColor: '#20613d', 
    position: 'absolute', 
    top: -20, width: '100%', 
    height: 60 
  },
  title: { 
    fontSize: 20, 
    fontWeight: "bold", 
    color: "#4CD964", 
    textAlign: "center", 
    marginLeft: 10 },
  mainImage: { 
    width: 50, 
    height: 50, 
    borderRadius: 25 
  },
  button: { 
    backgroundColor: "#4CD964", 
    borderRadius: 5, 
    alignSelf: "center", 
    height: 40, 
    width: 200, 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginHorizontal: 5 
  },
  buttonText: { 
    color: "#fff", 
    fontSize: 16, 
    fontWeight: "bold" 
  },
  menu: { 
    flex: 1, 
    flexDirection: "row", 
    height: "100%", 
    marginTop: 40 
  },
  menuButton: { 
    marginBottom: 10, 
    marginTop: 10, 
    backgroundColor: '#4CD964', 
    width: '90%', 
    height: 50, 
    borderRadius: 25, 
    alignSelf: 'center', 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  content: { 
    flex: 1, 
    padding: 20 
  },
  grid: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    gap: 10 
  },
  card: { 
    backgroundColor: '#fff', 
    width: 200, 
    padding: 10, 
    borderRadius: 10, 
    margin: 10, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 3, 
    elevation: 5 
  },
  cardTitle: { 
    fontWeight: 'bold', 
    marginBottom: 5 
  },
});
