import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useState } from 'react';
import axios from 'axios';

export default function IniciarSessao({navigation}) {
  const [nome, setnome] = useState("");
  const [password, setpassword] = useState("");
  const [id, setid] = useState(null)
  const [telefone, settelefone] = useState(null);
  const [email, setemail] = useState(null);
  const [datanascimento, setDatan] = useState<Date | null>(null);
  const [genero, setgenero] = useState(null);

  const [espaco, setespaco] = useState("");

  const iniciar = async () => {
    if(!nome || !password){
      setespaco("Preencha todos os campos antes de continuar.");
    }
    try {
      const response = await axios.post("http://192.168.1.219:3000/MindCare/API/users/login",{
        nome,
        password,
      });
      const Usuario = response.data;
      setid(Usuario.id || null);
      settelefone(Usuario.telefone || null);
      setemail(Usuario.email || null);
      setDatan(Usuario.datanascimento ? new Date(Usuario.datanascimento) : null);
      setgenero(Usuario.genero || null);

      const formattedDate = Usuario.datanascimento ? new Date(Usuario.datanascimento).toISOString().split('T')[0] : null;

      try{
        await axios.get("http://192.168.1.219:3000/MindCare/API/pacientes/iduser/" + Usuario.id);
        navigation.navigate("Navegacao1", {id, nome, telefone, email, password, datanascimento: formattedDate, genero });
      }catch(error){
        Alert.alert("nao e paciente")
      }

      
    } catch (error) {
      setespaco("Senha ou password incorreta.");
    } 
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.welcomeText, { fontWeight: 'bold' }]}>Iniciar Sessão</Text>
      <Text style={styles.text}>Username</Text>
      <TextInput style={styles.textbox} value={nome} onChangeText={setnome}/>
      <Text style={styles.text}>Password</Text>
      <TextInput style={styles.textbox} secureTextEntry={true} value={password} onChangeText={setpassword}/>
      <Text style={styles.esqueci}>Esqueci a password!</Text>
      <Text style={{fontSize: 11, color: 'red'}}>{espaco}</Text>
      <TouchableOpacity style={styles.button} onPress={iniciar}>
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