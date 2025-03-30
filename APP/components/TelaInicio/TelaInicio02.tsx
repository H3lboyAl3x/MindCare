
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function TelaInicio02({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.circle}>
          <Image
            source={{ uri: 'https://img.freepik.com/vetores-premium/trevo-com-quatro-folhas-isoladas-no-fundo-branco-conceito-da-sorte-no-estilo-cartoon-realista_302536-46.jpg' }}
            style={styles.logo}
          />
        </View>
      <Text style={styles.welcomeText}>MindCare</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={() => navigation.navigate('IniciarSessao')}>Iniciar Sessao</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Selecao')}> 
        <Text style={styles.buttonText}>Criar Conta</Text>
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
    marginBottom: 150,
    marginTop:100,
  },
  logo: {
    width: '90%',
    height: '90%',
    borderRadius: 200,
  },
  welcomeText: {
    fontSize: 25,
    color: 'white',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  },
  button: {
    width: '80%',
    height: 56,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#7EBF42',
    fontSize: 18,
    fontWeight: 'bold',
  },
});