import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  Linking,
  Animated,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const image1Url = "https://img.freepik.com/vetores-premium/trevo-com-quatro-folhas-isoladas-no-fundo-branco-conceito-da-sorte-no-estilo-cartoon-realista_302536-46.jpg";
const image2Url = "https://aebo.pt/wp-content/uploads/2024/05/spo-300x300.png";

const image = [
  require('../../assets/images/f1.png'),
  require('../../assets/images/f2.png'),
  require('../../assets/images/f3.png'),
  require('../../assets/images/f4.png'),
];

const frases = [
  "Cuidamos da sua saúde mental com atendimento online e seguro.",
  "Conecte-se com psicólogos experientes sem sair de casa.",
  "Apoio emocional, sempre ao seu alcance.",
  "Psicologia acessível, humana e acolhedora.",
];

export default function TelaInicio01({ navigation }) {
  const [index, setIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        const nextIndex = (index + 1) % image.length;
        setIndex(nextIndex);
        fadeAnim.setValue(0);
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [index]);

  if (Platform.OS === 'web') {
    return (
      <ScrollView style={stylesweb.container}>
        {/* Cabeçalho */}
        <View style={stylesweb.header}>
          <Image source={{ uri: image1Url }} style={stylesweb.mainImage} />
          <Text style={stylesweb.title}>Bem-vindo ao Espaço Gaya</Text>
          <TouchableOpacity style={{ marginLeft: 580 }} onPress={() => navigation.navigate('IniciarSessao')}>
            <LinearGradient colors={['#2E8B57', '#4CD964']} style={[stylesweb.button]}>
              <Text style={stylesweb.buttonText}>Iniciar Sessão</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => navigation.navigate('Selecao')}>
            <LinearGradient colors={['#2E8B57', '#4CD964']} style={stylesweb.button}>
              <Text style={stylesweb.buttonText}>Criar Conta</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={stylesweb.menu}>
          <View style={{width: '50%'}}>
            {/* Descrição com imagem e texto sobreposto */}
            <View style={stylesweb.sliderContainer}>
            <Animated.Image
              source={image[index]}
              style={[stylesweb.sliderImage, { opacity: fadeAnim }]}
             />
             <View style={stylesweb.overlay}>
              <Text style={stylesweb.overlayText}>{frases[index]}</Text>
             </View>
           </View>
          </View>

          <View style={{width: '50%'}}>
            {/* Imagem Secundária */}
            <View style={stylesweb.imageContainer}>
             <Image source={{ uri: image2Url }} style={stylesweb.secondaryImage} />
            </View>
            {/* Contato */}
            <View style={stylesweb.contactContainer}>
              <Text style={stylesweb.contactTitle}>Entre em Contato</Text>
              <Text style={[stylesweb.contactText, {fontSize: 14, textAlign: 'center', width: '80%'}]}>O Espaço Gaya oferece serviços de Telemedicina para cuidados psicológicos. Nossa equipe especializada está pronta para
              fornecer o apoio necessário ao seu bem-estar, com consultas online realizadas com qualidade e conforto, onde quer que você esteja.</Text>
              <Text style={stylesweb.contactText}>📞 Telefone: 928824001</Text>
              <Text style={stylesweb.contactText}>✉️ Email: rda.geral.2021@gmail.com</Text>
            </View>
            {/* Botão Instagram */}
            <TouchableOpacity
              style={stylesweb.button}
              onPress={() => Linking.openURL("https://www.instagram.com/espaco_gaya_?igsh=aDgyNTihNjJwaWxp")}>
              <Text style={stylesweb.buttonText}>Visite nosso Instagram</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }

  return (
    <SafeAreaView style={stylesMobile.safeArea}>
      <KeyboardAvoidingView behavior="padding" style={stylesMobile.container}>
        <View style={stylesMobile.inner}>
          <Image
            source={{ uri: 'https://img.freepik.com/vetores-premium/trevo-com-quatro-folhas-isoladas-no-fundo-branco-conceito-da-sorte-no-estilo-cartoon-realista_302536-46.jpg' }}
            style={stylesMobile.logo}
          />
          <Text style={stylesMobile.welcome}>Bem-vindo ao</Text>
          <Text style={stylesMobile.title}>MindCare</Text>
          <TouchableOpacity onPress={() => navigation.navigate('TelaInicio02')}>
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
  welcome: {
    fontSize: 20,
    color: '#2E8B57',
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
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const stylesweb = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    paddingTop: 20,
  },
  header: {
    alignItems: "center",
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: '#20613d',
    position: 'absolute',
    top: -20,
    width: '100%',
    height: 60,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4CD964",
    textAlign: "center",
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#7EBF42",
    marginTop: 10,
    textAlign: "center",
  },
  mainImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  description: {
    marginTop: 40,
    paddingHorizontal: 20,
    flexDirection: 'row',
    gap: 20,
    width: '100%',
  },
  caixatext: {
    width: '40%',
    height: 200,
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    lineHeight: 24,
    padding: 10,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  secondaryImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    resizeMode: "contain",
  },
  contactContainer: {
    marginTop: 40,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  contactTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2E8B57",
    marginBottom: 10,
  },
  contactText: {
    fontSize: 16,
    color: "#333",
    marginVertical: 5,
  },
  button: {
    backgroundColor: "#4CD964",
    borderRadius: 5,
    alignSelf: "center",
    height: 40,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  sliderContainer: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  sliderImage: {
    width: '50%',
    height: 450,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  menu: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  overlay: {
    position: 'absolute',
    bottom: 100,
    left: 450,
    right: 400,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 15,
    borderRadius: 12,
    width: "40%",
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  overlayText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },  
});