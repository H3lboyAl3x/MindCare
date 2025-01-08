import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

export default function CriarConta01({navigation}) {
  return (
    <KeyboardAvoidingView
      style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.scrollView} keyboardShouldPersistTaps="handled">
        <Text style={[styles.welcomeText, { fontWeight: 'bold' }]}>Criar Conta</Text>
        <Text style={styles.text}>Username</Text>
        <TextInput style={styles.textbox} />
        <Text style={styles.text}>Telefone</Text>
        <TextInput style={styles.textbox} keyboardType="phone-pad" />
        <Text style={styles.text}>Email</Text>
        <TextInput style={styles.textbox} keyboardType="email-address" />
        <Text style={styles.text}>Password</Text>
        <TextInput style={styles.textbox} secureTextEntry={true} />
        <Text style={styles.text}>Confirmar Password</Text>
        <TextInput style={styles.textbox} secureTextEntry={true} />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CriarConta02')}>
          <Text style={styles.buttonText}>Criar conta</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 24,
    color: '#000',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    marginTop: 30,
  },
  text: {
    marginTop: 30,
    color: '#D2D2D2',
    fontSize: 15,
  },
  textbox: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: '#D2D2D2',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: 200,
    height: 56,
    backgroundColor: '#14AE5C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});