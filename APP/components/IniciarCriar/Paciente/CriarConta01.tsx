import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView,
  Image
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function CriarConta01({ navigation }) {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmarp, setConfirmarp] = useState("");
  const [espaco, setEspaco] = useState("");

  const criar1 = () => {
    if (!nome || !telefone || !email || !password || !confirmarp) {
      setEspaco("Preencha todos os campos antes de continuar.");
      return;
    }
    if (password !== confirmarp) {
      setEspaco("As passwords não combinam.");
      return;
    }
    navigation.navigate("CriarConta02", {
      nome,
      telefone,
      email,
      password
    });
  };

  if (Platform.OS === "web") {
    return (
      <SafeAreaView style={stylesWeb.container}>
        <View style={stylesWeb.imageContainer}>
          <Image
            source={{ uri: "https://aebo.pt/wp-content/uploads/2024/05/spo-300x300.png" }}
            style={stylesWeb.logo}
          />
        </View>
        <View style={stylesWeb.content}>
          <View style={stylesWeb.inner}>
            <Text style={stylesWeb.welcomeText}>Criar Conta</Text>
            <TextInput style={stylesWeb.textbox} value={nome} onChangeText={setNome} placeholder="Nome de usuário" placeholderTextColor="#b3b3b3" />
            <TextInput style={stylesWeb.textbox} value={telefone} onChangeText={setTelefone} keyboardType="phone-pad" placeholder="Telefone" placeholderTextColor="#b3b3b3" />
            <TextInput style={stylesWeb.textbox} value={email} onChangeText={setEmail} keyboardType="email-address" placeholder="Email" placeholderTextColor="#b3b3b3" />
            <TextInput style={stylesWeb.textbox} value={password} onChangeText={setPassword} secureTextEntry placeholder="Senha" placeholderTextColor="#b3b3b3" />
            <TextInput style={stylesWeb.textbox} value={confirmarp} onChangeText={setConfirmarp} secureTextEntry placeholder="Confirmar Senha" placeholderTextColor="#b3b3b3" />
            <Text style={{ fontSize: 11, color: "red" }}>{espaco}</Text>
            <TouchableOpacity onPress={criar1}>
            <LinearGradient colors={['#2E8B57', '#4CD964']} style={stylesWeb.button}>
              <Text style={stylesWeb.buttonText}>Criar Conta</Text>
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
        <ScrollView contentContainerStyle={stylesMobile.inner} keyboardShouldPersistTaps="handled">
          <Image
            source={{ uri: "https://img.freepik.com/vetores-premium/trevo-com-quatro-folhas-isoladas-no-fundo-branco-conceito-da-sorte-no-estilo-cartoon-realista_302536-46.jpg" }}
            style={stylesMobile.logo}
          />
          <Text style={stylesMobile.welcomeText}>Criar Conta</Text>
          <TextInput style={stylesMobile.textbox} value={nome} onChangeText={setNome} placeholder="Nome de usuário" placeholderTextColor="#b3b3b3" />
          <TextInput style={stylesMobile.textbox} value={telefone} onChangeText={setTelefone} keyboardType="phone-pad" placeholder="Telefone" placeholderTextColor="#b3b3b3" />
          <TextInput style={stylesMobile.textbox} value={email} onChangeText={setEmail} keyboardType="email-address" placeholder="Email" placeholderTextColor="#b3b3b3" />
          <TextInput style={stylesMobile.textbox} value={password} onChangeText={setPassword} secureTextEntry placeholder="Senha" placeholderTextColor="#b3b3b3" />
          <TextInput style={stylesMobile.textbox} value={confirmarp} onChangeText={setConfirmarp} secureTextEntry placeholder="Confirmar Senha" placeholderTextColor="#b3b3b3" />
          <Text style={{ fontSize: 11, color: "red" }}>{espaco}</Text>
          <TouchableOpacity onPress={criar1}>
            <LinearGradient colors={['#2E8B57', '#4CD964']} style={stylesMobile.button}>
              <Text style={stylesMobile.buttonText}>Criar Conta</Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
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
    width: "80%",
    gap: 15,
  },
  logo: {
    width: 140,
    height: 140,
    borderRadius: 80,
    backgroundColor: "#e7fbe6",
    marginBottom: 5,
    marginTop: 10,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#4CD964"
  },
  textbox: {
    marginTop: 10,
    color: "#4CD964",
    width: 200,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#e3e6e3",
    textAlign: "center"
  },
  button: {
    width: 220,
    height: 52,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold"
  }
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
    fontSize: 35,
    fontWeight: "bold",
    color: "#369e48"
  },
  textbox: {
    marginTop: 10,
    color: "#4CD964",
    width: "80%",
    height: 50,
    borderRadius: 50,
    backgroundColor: "#e3e6e3",
    textAlign: "center"
  },
  button: {
    width: 260,
    height: 56,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    backgroundColor: "#4CD964"
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold"
  }
});