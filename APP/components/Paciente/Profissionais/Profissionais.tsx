import React, { useEffect, useState } from "react";
import { 
  View, Text, StyleSheet, ScrollView, FlatList, 
  TouchableOpacity, ActivityIndicator 
} from "react-native";
import axios from "axios";

interface Profissional {
  id: number;
  tempoexperiencia: number;
  iduser: number;
}

interface Usuario {
  id: number;
  nome: string;
}

interface ProfissionalComNome {
  id: number;
  nome: string;
  tempoexperiencia: number;
}

export default function Profissionais() {
  const [profissionais, setProfissionais] = useState<ProfissionalComNome[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const Listafuncionario = async () => {
    try {
      // Buscar a lista de profissionais
      const response = await axios.get<Profissional[]>("http://192.168.1.219:3000/MindCare/API/profissionais");
      const listaProfissionais = response.data;

      // Buscar os nomes dos usuários relacionados
      const profissionaisComNomes: ProfissionalComNome[] = await Promise.all(
        listaProfissionais.map(async (profissional) => {
          try {
            const userResponse = await axios.get<Usuario>(
              "http://192.168.1.219:3000/MindCare/API/users/"+profissional.iduser
            );
            return {
              id: profissional.id,
              nome: userResponse.data.nome,
              tempoexperiencia: profissional.tempoexperiencia,
            };
          } catch (error) {
            console.error(`Erro ao buscar usuário ${profissional.iduser}:`, error);
            return {
              id: profissional.id,
              nome: "Desconhecido",
              tempoexperiencia: profissional.tempoexperiencia,
            };
          }
        })
      );

      setProfissionais(profissionaisComNomes);
    } catch (error) {
      console.error("Erro ao buscar profissionais:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    Listafuncionario();
  }, []);

  return (
    <View style={styles.container}>
  <Text style={styles.titulo}>Profissionais</Text>

  {/* Especialidades */}
  <Text style={styles.especialidades}>Especialidades</Text>
  <ScrollView horizontal style={styles.scrollEspecialidades}>
    {[...Array(4)].map((_, index) => (
      <View key={index} style={styles.bolinhaContainer}>
        <View style={styles.bolinha} />
        <Text style={styles.textoEspecialidade}>Psicologia Educacional</Text>
      </View>
    ))}
  </ScrollView>

  {/* Profissionais que já acompanham */}
  <Text style={styles.Textpro}>Profissionais que já o acompanham</Text>
  

  {/* Outros profissionais */}
  <Text style={styles.Textpro}>Outros Profissionais</Text>
  {loading ? (
    <ActivityIndicator size="large" color="#34C759" />
  ) : (
    <FlatList
      data={profissionais}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.nome}>{item.nome}</Text>
          <Text>Experiência: {item.tempoexperiencia} anos</Text>
        </View>
      )}
    />
  )}
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
  },
  especialidades: {
    textAlign: "center",
    fontSize: 15,
    color: "#c0c0c0",
    marginBottom: 5,
  },
  scrollEspecialidades: {
    flexDirection: "row",
  },
  bolinhaContainer: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  bolinha: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#c0c0c0",
  },
  textoEspecialidade: {
    fontSize: 12,
    textAlign: "center",
  },
  Textpro: {
    fontSize: 15,
    color: "white",
    backgroundColor: "#34C759",
    padding: 5,
    textAlign: "center",
    marginBottom: 5,
  },
  card: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 8,
    marginBottom: 5,
  },
  nome: {
    fontSize: 16,
    fontWeight: "bold",
  },
});