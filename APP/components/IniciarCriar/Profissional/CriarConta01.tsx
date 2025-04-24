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
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function CriarConta01p({ navigation }) {
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
    if (password.length < 8 || !/^[A-Z]/.test(password) || !/\d/.test(password)) {
      setEspaco("A password deve ter pelo menos 8 caracteres, uma letra maiúscula e um número.");
      return;
    }
    if (telefone.length < 9) {
      setEspaco("O telefone deve ter pelo menos 9 dígitos.");
      return;
    }
    navigation.navigate("CriarConta02p", {
      nome,
      telefone,
      email,
      password,
    });
  };

  if (Platform.OS === "web") {
    return (
      <SafeAreaView style={stylesWeb.safeArea}>
        {/* Cabeçalho */}
        <View style={stylesWeb.header}>
          <TouchableOpacity onPress={() => navigation.navigate("TelaInicio01")}>
            <Image
              source={{ uri: "https://aebo.pt/wp-content/uploads/2024/05/spo-300x300.png" }}
              style={stylesWeb.logoHeader}
            />
          </TouchableOpacity>
        </View>

        {/* Corpo */}
        <View style={stylesWeb.container}>
          {/* Coluna Esquerda */}
          <View style={stylesWeb.left}>
            <Text style={stylesWeb.title}>Criar Conta</Text>
            <Text style={stylesWeb.subtitle}>
              Preencha todos os campos para criar sua conta no MindCare.
            </Text>
            <Image
              source={{ uri: "https://cdn-icons-png.flaticon.com/512/4088/4088981.png" }}
              style={stylesWeb.leftImage}
            />
          </View>

          {/* Coluna Direita */}
          <View style={stylesWeb.right}>
            <View style={stylesWeb.form}>
              <Text style={stylesWeb.formTitle}>Preencha os dados</Text>
              <TextInput
                style={stylesWeb.input}
                placeholder="Nome de usuário"
                placeholderTextColor="#b3b3b3"
                value={nome}
                onChangeText={setNome}
              />
              <TextInput
                style={stylesWeb.input}
                placeholder="Telefone"
                placeholderTextColor="#b3b3b3"
                keyboardType="phone-pad"
                value={telefone}
                onChangeText={setTelefone}
              />
              <TextInput
                style={stylesWeb.input}
                placeholder="Email"
                placeholderTextColor="#b3b3b3"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                style={stylesWeb.input}
                placeholder="Senha"
                placeholderTextColor="#b3b3b3"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
              <TextInput
                style={stylesWeb.input}
                placeholder="Confirmar Senha"
                placeholderTextColor="#b3b3b3"
                secureTextEntry
                value={confirmarp}
                onChangeText={setConfirmarp}
              />
              <Text style={stylesWeb.erro}>{espaco}</Text>
              <TouchableOpacity onPress={criar1}>
                <LinearGradient colors={["#2E8B57", "#4CD964"]} style={stylesWeb.button}>
                  <Text style={stylesWeb.buttonText}>Criar Conta</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
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
          <Text style={stylesMobile.welcomeText}>Preencha os dados</Text>
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
    width: "100%",
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
    width: 300,
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
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    height: 80,
    backgroundColor: "#005631",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 40,
  },
  logoHeader: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#ffffff",
  },
  left: {
    flex: 1,
    backgroundColor: "#005631",
    padding: 60,
    justifyContent: "center",
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    color: "#dcdcdc",
    marginBottom: 40,
  },
  leftImage: {
    width: "80%",
    height: 250,
    resizeMode: "contain",
  },
  right: {
    flex: 1,
    backgroundColor: "#e8ffe9",
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  form: {
    width: "100%",
    maxWidth: 400,
    gap: 20,
    alignItems: "center",
  },
  formTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2E8B57",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    height: 50,
    borderRadius: 30,
    backgroundColor: "#e3e6e3",
    textAlign: "center",
    fontSize: 16,
    color: "#2E8B57",
  },
  erro: {
    fontSize: 13,
    color: "red",
  },
  button: {
    width: "100%",
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});