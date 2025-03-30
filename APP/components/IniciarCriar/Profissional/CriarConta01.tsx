import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';

export default function CriarConta01p({navigation}) {
  
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
      navigation.navigate("CriarConta02p", {
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
            <TextInput style={styles.textbox} value={nome} onChangeText={setnome} placeholder="Nome de usuario"  placeholderTextColor={'#c0c0c0'}/>
            <TextInput style={styles.textbox} keyboardType="phone-pad" value={telefone} onChangeText={settelefone} placeholder="Telefone"  placeholderTextColor={'#c0c0c0'} />
            <TextInput style={styles.textbox} keyboardType="email-address" value={email} onChangeText={setEmail} placeholder="Email"  placeholderTextColor={'#c0c0c0'}/>
            <TextInput style={styles.textbox} secureTextEntry={true} value={password} onChangeText={setPassword} placeholder="Senha"  placeholderTextColor={'#c0c0c0'}/>
            <TextInput style={styles.textbox} secureTextEntry={true} value={confirmarp} onChangeText={setconfirmarp} placeholder="Confirmar Senha"  placeholderTextColor={'#c0c0c0'}/>
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
        backgroundColor: '#37C231',
      },
      scrollView: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      welcomeText: {
        fontSize: 20,
        color: "#fff",
        textAlign: "center",
      },
      textbox: {
        marginTop: 20,
        color:'white',
        width: '80%',
        height: 50,
        borderRadius: 50,
        backgroundColor: '#2a8c26',
        textAlign: 'center'
      },
      button: {
        width: '80%',
        height: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        alignSelf: 'center',
        marginTop: 30,
      },
      buttonText: {
        color: '#7EBF42',
        fontSize: 18,
        fontWeight: 'bold',
      },
    });