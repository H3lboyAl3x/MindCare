import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function TelaInicio02({ navigation }) {
  if (Platform.OS === 'web') {
    return (
      <SafeAreaView style={stylesWeb.container}>
        <View style={stylesWeb.imageContainer}>
          <Image
            source={{ uri: 'https://aebo.pt/wp-content/uploads/2024/05/spo-300x300.png' }}
            style={stylesWeb.image}
          />
        </View>
        <View style={stylesWeb.content}>
          <View style={stylesWeb.inner}>
            <Image
              source={{
                uri: 'https://img.freepik.com/vetores-premium/trevo-com-quatro-folhas-isoladas-no-fundo-branco-conceito-da-sorte-no-estilo-cartoon-realista_302536-46.jpg',
              }}
              style={stylesMobile.logo}
            />
            <Text style={stylesWeb.title}>MindCare</Text>
            <TouchableOpacity onPress={() => navigation.navigate('IniciarSessao')}>
              <LinearGradient colors={['#2E8B57', '#4CD964']} style={stylesWeb.button}>
                <Text style={stylesWeb.buttonText}>Iniciar Sessão</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Selecao')}>
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
        <View style={stylesMobile.inner}>
          <Image
            source={{
              uri: 'https://img.freepik.com/vetores-premium/trevo-com-quatro-folhas-isoladas-no-fundo-branco-conceito-da-sorte-no-estilo-cartoon-realista_302536-46.jpg',
            }}
            style={stylesMobile.logo}
          />
          <Text style={stylesMobile.title}>MindCare</Text>
          <TouchableOpacity onPress={() => navigation.navigate('IniciarSessao')}>
            <LinearGradient colors={['#2E8B57', '#4CD964']} style={stylesMobile.button}>
              <Text style={stylesMobile.buttonText}>Iniciar Sessão</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Selecao')}>
            <LinearGradient colors={['#2E8B57', '#4CD964']} style={stylesMobile.button}>
              <Text style={stylesMobile.buttonText}>Criar Conta</Text>
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
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#005631',
  },
  imageContainer: {
    flex: 1,
    backgroundColor: '#005631',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  image: {
    width: '80%',
    height: '80%',
    objectFit: 'contain',
    maxWidth: 400,
    maxHeight: 400,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#54e86d',
    borderRadius: 50,
  },
  inner: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    gap: 20,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#369e48',
  },
  button: {
    width: 260,
    height: 56,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});