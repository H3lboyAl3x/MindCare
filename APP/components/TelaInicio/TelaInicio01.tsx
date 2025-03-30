import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function TelaInicio01({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.circle}>
          <Image
            source={{ uri: 'https://img.freepik.com/vetores-premium/trevo-com-quatro-folhas-isoladas-no-fundo-branco-conceito-da-sorte-no-estilo-cartoon-realista_302536-46.jpg' }}
            style={styles.logo}
          />
        </View>
      <Text style={[styles.welcomeText, { fontSize: 20 }]}>Bem-Vindo ao</Text>
      <Text style={[styles.welcomeText, { fontWeight: 'bold', fontSize: 30 }]}>MindCare</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TelaInicio02')}>
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#37C231',
  },
  circle: {
    width: '60%',
    height: '30%',
    borderRadius: 200,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: "center",
    marginBottom: 200,
    marginTop:100,
  },
  logo: {
    width: '90%',
    height: '90%',
    borderRadius: 200,
  },
  welcomeText: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'sans-serif',
  },
  button: {
    width: '80%',
    height: 56,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 50,
  },
  buttonText: {
    color: '#7EBF42',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
