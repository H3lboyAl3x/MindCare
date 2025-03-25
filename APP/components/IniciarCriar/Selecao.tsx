
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Selecao({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.circle}>
          <Image
            source={{ uri: 'https://img.freepik.com/vetores-premium/trevo-com-quatro-folhas-isoladas-no-fundo-branco-conceito-da-sorte-no-estilo-cartoon-realista_302536-46.jpg' }}
            style={styles.logo}
          />
        </View>
      </View>
      <Text style={[styles.welcomeText, { fontWeight: 'bold' }]}>MindCare</Text>
      <View style={styles.indicator} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CriarConta01')}>
        <Text style={styles.buttonText}>Paciente</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CriarConta01p')}> 
        <Text style={styles.buttonText}>Profissional</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 200,
    borderWidth: 2,
    borderColor: '#34C759',
    width: '95%',
    height: 395
  },
  circle: {
    width: '80%',
    height: 310,
    borderRadius: 200,
    borderWidth: 2,
    borderColor: '#40C900',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '95%',
    height: '95%',
    borderRadius: 200,

  },
  welcomeText: {
    fontSize: 24,
    color: '#000',
    textAlign: 'center',
    fontFamily: 'sans-serif',
  },
  indicator: {
    width: 35,
    height: 35,
    backgroundColor: '#009951',
    borderRadius: 50,
    marginVertical: 20,
  },
  button: {
    width: 200,
    height: 56,
    backgroundColor: '#14AE5C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});