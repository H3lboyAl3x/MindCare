import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import { TopWaves } from '@/app/TopWaves';

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
        <TopWaves />
          <ScrollView contentContainerStyle={styles.scrollView} keyboardShouldPersistTaps="handled">
            <Text style={[styles.welcomeText, { fontWeight: 'bold' }]}>Criar Conta</Text>
            <TextInput style={styles.textbox} value={nome} onChangeText={setnome} placeholder="Nome de usuario"  placeholderTextColor={'#6fcf87'}/>
            <TextInput style={styles.textbox} keyboardType="phone-pad" value={telefone} onChangeText={settelefone} placeholder="Telefone"  placeholderTextColor={'#6fcf87'} />
            <TextInput style={styles.textbox} keyboardType="email-address" value={email} onChangeText={setEmail} placeholder="Email"  placeholderTextColor={'#6fcf87'}/>
            <TextInput style={styles.textbox} secureTextEntry={true} value={password} onChangeText={setPassword} placeholder="Senha"  placeholderTextColor={'#6fcf87'}/>
            <TextInput style={styles.textbox} secureTextEntry={true} value={confirmarp} onChangeText={setconfirmarp} placeholder="Confirmar Senha"  placeholderTextColor={'#6fcf87'}/>
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
        marginTop: -35,
      },
      scrollView: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      welcomeText: {
        fontSize: 20,
        color: "#4CD964",
        textAlign: "center",
      },
      textbox: {
        marginTop: 20,
        color:'#4CD964',
        width: '80%',
        height: 50,
        borderRadius: 50,
        backgroundColor: '#e3e6e3',
        textAlign: 'center'
      },
      button: {
        width: '80%',
        height: 50,
        backgroundColor: '#4CD964',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        alignSelf: 'center',
        marginTop: 30,
      },
      buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
    });