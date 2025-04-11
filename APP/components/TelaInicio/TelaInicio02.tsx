
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { TopWaves } from '@/app/TopWaves';

export default function TelaInicio02({navigation}) {
  return (
    <View style={styles.container}>
      <TopWaves/>
        <View style={styles.circle}>
          <Image
            source={{ uri: 'https://img.freepik.com/vetores-premium/trevo-com-quatro-folhas-isoladas-no-fundo-branco-conceito-da-sorte-no-estilo-cartoon-realista_302536-46.jpg' }}
            style={styles.logo}
          />
        </View>
      <Text style={styles.welcomeText}>MindCare</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('IniciarSessao')}>
        <Text style={styles.buttonText}>Iniciar Sessao</Text>
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
    backgroundColor: '#fff',
    marginTop: -75,
  },
  circle: {
    width: '65%',
    height: '30%',
    borderRadius: 200,
    backgroundColor: '#4CD964',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: "center",
    marginBottom: 100,
    marginTop:80,
  },
  logo: {
    width: '95%',
    height: '95%',
    borderRadius: 200,
  },
  welcomeText: {
    fontSize: 24,
    color: '#4CD964',
    fontFamily: 'sans-serif',
  },
  button: {
    width: '80%',
    height: 60,
    backgroundColor: '#4CD964',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});