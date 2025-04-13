import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Selecao({ navigation }) {
  if (Platform.OS === 'web') {
    return (
      <SafeAreaView style={stylesWeb.safeArea}>
        {/* Cabeçalho */}
        <View style={stylesWeb.header}>
          <Image
            source={{ uri: 'https://aebo.pt/wp-content/uploads/2024/05/spo-300x300.png' }}
            style={stylesWeb.logoHeader}
          />
        </View>

        {/* Corpo */}
        <View style={stylesWeb.container}>
          {/* Coluna Esquerda */}
          <View style={stylesWeb.left}>
            <Text style={stylesWeb.title}>Crie a sua conta</Text>
            <Text style={stylesWeb.subtitle}>
              Seja paciente ou profissional, o MindCare está aqui para cuidar de ti.
            </Text>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4088/4088981.png' }}
              style={stylesWeb.leftImage}
            />
          </View>

          {/* Coluna Direita */}
          <View style={stylesWeb.right}>
            <View style={stylesWeb.form}>
              <Text style={stylesWeb.formTitle}>Seleciona o tipo de conta</Text>

              <TouchableOpacity onPress={() => navigation.navigate('CriarConta01')}>
                <LinearGradient colors={['#2E8B57', '#4CD964']} style={stylesWeb.button}>
                  <Text style={stylesWeb.buttonText}>Paciente</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('CriarConta01p')}>
                <LinearGradient colors={['#2E8B57', '#4CD964']} style={stylesWeb.button}>
                  <Text style={stylesWeb.buttonText}>Profissional</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("IniciarSessao")}>
                <Text style={stylesWeb.instagram}>Ja possui uma conta</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  // MOBILE
  return (
    <SafeAreaView style={stylesMobile.safeArea}>
      <KeyboardAvoidingView behavior="padding" style={stylesMobile.container}>
        <View style={stylesMobile.inner}>
          <Image
            source={{
              uri: 'https://img.freepik.com/vetores-premium/trevo-com-quatro-folhas-isoladas-no-fundo-branco-conceito-da-sorte-no-estilo-cartoon-realista_302536-46.jpg',
            }}
            style={stylesMobile.logo}
          />
          <Text style={stylesMobile.title}>MindCare</Text>

          <TouchableOpacity onPress={() => navigation.navigate('CriarConta01')}>
            <LinearGradient colors={['#2E8B57', '#4CD964']} style={stylesMobile.button}>
              <Text style={stylesMobile.buttonText}>Paciente</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('CriarConta01p')}>
            <LinearGradient colors={['#2E8B57', '#4CD964']} style={stylesMobile.button}>
              <Text style={stylesMobile.buttonText}>Profissional</Text>
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
    backgroundColor: '#20613d',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  inner: {
    alignItems: 'center',
    gap: 20,
  },
  logo: {
    width: 140,
    height: 140,
    borderRadius: 80,
    backgroundColor: '#e7fbe6',
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4CD964',
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
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    height: 80,
    backgroundColor: '#005631',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
  logoHeader: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  left: {
    flex: 1,
    backgroundColor: '#005631',
    padding: 60,
    justifyContent: 'center',
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    color: '#dcdcdc',
    marginBottom: 40,
  },
  leftImage: {
    width: '80%',
    height: 250,
    resizeMode: 'contain',
  },
  right: {
    flex: 1,
    backgroundColor: '#e8ffe9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  form: {
    width: '100%',
    maxWidth: 400,
    gap: 20,
    alignItems: 'center',
  },
  formTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2E8B57',
    marginBottom: 10,
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  instagram: {
    color: "#2E8B57",
    marginTop: 10,
    fontSize: 15,
    fontWeight: "500",
    textDecorationLine: "underline",
  },
});
