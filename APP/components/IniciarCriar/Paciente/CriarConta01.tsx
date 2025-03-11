import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';

export default function CriarConta01({navigation}) {
  
  const [nome, setnome] = useState("");
  const [telefone, settelefone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmarp, setconfirmarp] = useState("");

  const [espaco, setespaco] = useState("");

  const criar1 = () => {
    if(!nome || !telefone || !email || !password || !confirmarp)
    {
      setespaco("Preencha todos os campos antes de continuar.");
    }
    if(password !== confirmarp)
    {
      setespaco("As passwords nao combinam")
    }
    if(nome && telefone && email && password && confirmarp && password === confirmarp)
    {
      navigation.navigate("CriarConta02", {
        nome,
        telefone,
        email,
        password,
      })
    }
  };

 
  


  return (
    <KeyboardAvoidingView
      style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.scrollView} keyboardShouldPersistTaps="handled">
        <Text style={[styles.welcomeText, { fontWeight: 'bold' }]}>Criar Conta</Text>
        <Text style={styles.text}>Username</Text>
        <TextInput style={styles.textbox} value={nome} onChangeText={setnome} />
        <Text style={styles.text}>Telefone</Text>
        <TextInput style={styles.textbox} keyboardType="phone-pad" value={telefone} onChangeText={settelefone} />
        <Text style={styles.text}>Email</Text>
        <TextInput style={styles.textbox} keyboardType="email-address" value={email} onChangeText={setEmail} />
        <Text style={styles.text}>Password</Text>
        <TextInput style={styles.textbox} secureTextEntry={true} value={password} onChangeText={setPassword} />
        <Text style={styles.text}>Confirmar Password</Text>
        <TextInput style={styles.textbox} secureTextEntry={true} value={confirmarp} onChangeText={setconfirmarp}/>
        <Text style={{fontSize: 11, color: 'red'}}>{espaco}</Text>
        <TouchableOpacity style={styles.button} onPress={criar1}>
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