import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  KeyboardAvoidingView,
  Alert,
  Image
} from "react-native";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import { TopWaves } from "@/app/TopWaves";
import { getUrl } from "@/app/utils/url";

export default function IniciarSessao({ navigation }) {
  const [nome, setNome] = useState("");
  const [password, setPassword] = useState("");
  const [espaco, setEspaco] = useState("");

  const iniciar = async () => {
    if (!nome || !password) {
      setEspaco("Preencha todos os campos antes de continuar.");
      return;
    }

    try {
      const response = await axios.post(`${getUrl()}/MindCare/API/users/login`, { nome, password });
      const usuario = response.data;

      const formattedDate = usuario.datanascimento
        ? new Date(usuario.datanascimento).toISOString().split("T")[0]
        : null;

        

      try {
        const response1 = await axios.get(`${getUrl()}/MindCare/API/pacientes/iduser/${usuario.id}`);
        const paciente = response1.data;
        navigation.navigate("Navegacao1", {
          id: usuario.id,
          idp: paciente.id,
          nome: usuario.nome,
          telefone: usuario.telefone,
          email: usuario.email,
          password: usuario.password,
          datanascimento: formattedDate,
          genero: usuario.genero
        });
      } catch (error) {
        try {
          const response2 = await axios.get(`${getUrl()}/MindCare/API/profissionais/iduser/${usuario.id}`);
          const profissional = response2.data;
          navigation.navigate("Navegacao2", {
            id: usuario.id,
            idp: profissional.id,
            nome: usuario.nome,
            telefone: usuario.telefone,
            email: usuario.email,
            password: usuario.password,
            datanascimento: formattedDate,
            genero: usuario.genero
          });
        } catch (error) {
          Alert.alert("Erro: " + error);
        }
      }
    } catch (error) {
      setEspaco("Senha ou nome incorretos.");
    }
  };

  if (Platform.OS === "web") {
    return (
      <SafeAreaView style={stylesWeb.container}>
        <View style={stylesWeb.imageContainer}>
          <Image
            source={{
              uri: "https://aebo.pt/wp-content/uploads/2024/05/spo-300x300.png"
            }}
            style={stylesWeb.logo}
          />
        </View>
        <View style={stylesWeb.content}>
          <View style={stylesWeb.inner}>
            <Text style={stylesWeb.welcomeText}>Iniciar Sessão</Text>
            <TextInput
              style={stylesWeb.textbox}
              value={nome}
              onChangeText={setNome}
              placeholder="Nome de usuario"
              placeholderTextColor={"#b3b3b3"}
            />
            <TextInput
              style={stylesWeb.textbox}
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
              placeholder="Senha"
              placeholderTextColor={"#b3b3b3"}
            />
            <Text style={stylesWeb.esqueci}>Esqueci a senha!</Text>
            <Text style={{ fontSize: 11, color: "red" }}>{espaco}</Text>
            <TouchableOpacity onPress={iniciar}>
              <LinearGradient colors={['#2E8B57', '#4CD964']} style={stylesWeb.button}>
                  <Text style={stylesWeb.buttonText}>Iniciar</Text>
                  </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={stylesMobile.safeArea}>
      <KeyboardAvoidingView behavior="padding" style={stylesMobile.container}>
        <View style={stylesMobile.inner}>
          <Image
            source={{
              uri: "https://img.freepik.com/vetores-premium/trevo-com-quatro-folhas-isoladas-no-fundo-branco-conceito-da-sorte-no-estilo-cartoon-realista_302536-46.jpg"
            }}
            style={stylesMobile.logo}
          />
          <Text style={stylesMobile.welcomeText}>Iniciar Sessão</Text>
          <TextInput
            style={stylesMobile.textbox}
            value={nome}
            onChangeText={setNome}
            placeholder="Nome de usuario"
            placeholderTextColor={"#b3b3b3"}
          />
          <TextInput
            style={stylesMobile.textbox}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            placeholder="Senha"
            placeholderTextColor={"#b3b3b3"}
          />
          <Text style={stylesMobile.esqueci}>Esqueci a senha!</Text>
          <Text style={{ fontSize: 11, color: "red" }}>{espaco}</Text>
          <TouchableOpacity onPress={iniciar}>
            <LinearGradient colors={['#2E8B57', '#4CD964']} style={stylesMobile.button}>
                <Text style={stylesMobile.buttonText}>Iniciar</Text>
                </LinearGradient>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const stylesMobile = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#20613d"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30
  },
  inner: {
    alignItems: "center",
    width: "100%",
    gap: 20
  },
  logo: {
    width: 140,
    height: 140,
    borderRadius: 80,
    backgroundColor: "#e7fbe6",
    marginBottom: 10
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#4CD964"
  },
  textbox: {
    marginTop: 20,
    color: "#4CD964",
    width: "80%",
    height: 50,
    borderRadius: 50,
    backgroundColor: "#e3e6e3",
    textAlign: "center"
  },
  esqueci: {
    color: "#fff"
  },
  button: {
    width: 220,
    height: 52,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

const stylesWeb = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#005631"
  },
  imageContainer: {
    flex: 1,
    backgroundColor: "#005631",
    justifyContent: "center",
    alignItems: "center",
    padding: 50
  },
  logo: {
    width: "80%",
    height: "80%",
    objectFit: "contain",
    maxWidth: 400,
    maxHeight: 400
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    backgroundColor: "#54e86d",
    borderRadius: 50
  },
  inner: {
    width: "100%",
    maxWidth: 400,
    alignItems: "center",
    gap: 20
  },
  welcomeText: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#369e48"
  },
  textbox: {
    marginTop: 20,
    color: "#4CD964",
    width: "80%",
    height: 50,
    borderRadius: 50,
    backgroundColor: "#e3e6e3",
    textAlign: "center"
  },
  esqueci: {
    color: "#fff"
  },
  button: {
    width: 260,
    height: 56,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold"
  }
});