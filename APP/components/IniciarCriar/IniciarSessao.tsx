import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export default function IniciarSessao({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.welcomeText, { fontWeight: 'bold' }]}>Iniciar Sessão</Text>
      <Text style={styles.text}>Username</Text>
      <TextInput style={styles.textbox}/>
      <Text style={styles.text}>Password</Text>
      <TextInput style={styles.textbox} secureTextEntry={true}/>
      <Text style={styles.esqueci}>Esqueci a password!</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Navegacao")}>
        <Text style={styles.buttonText}>Iniciar Sessão</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: 24,
    color: '#000',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    marginTop: 100,
  },
  text: {
    marginTop: 50,
    color: '#D2D2D2',
    fontSize: 15,
  },
  textbox: {
    width:300,
    height: 40,
    borderWidth: 1,
    borderColor: '#D2D2D2',
    borderRadius: 10,
  },
  esqueci: {
    color: '#5BD654',
    marginRight: 150,
  },
  button: {
    width: 200,
    height: 56,
    backgroundColor: '#14AE5C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 300,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});