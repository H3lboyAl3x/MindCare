import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity } from "react-native";
import axios from "axios";
import { getUrl } from "@/app/utils/url";

export default function IniciarSessao({ navigation }) {
  const [nome, setNome] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState(null);
  const [idp, setIdp] = useState(null);
  const [idpro, setidpro] = useState(null);
  const [idap, setidap] = useState(null);
  const [idat, setidat] = useState(null);
  const [expe, setexpe] = useState(null);
  const [telefone, setTelefone] = useState(null);
  const [email, setEmail] = useState(null);
  const [datanascimento, setDatan] = useState<Date | null>(null);
  const [genero, setGenero] = useState(null);
  const [espaco, setEspaco] = useState("");

  

  const iniciar = async () => {
    if (!nome || !password) {
      setEspaco("Preencha todos os campos antes de continuar.");
      return;
    }


    try {
      const response = await axios.post(`${getUrl()}/MindCare/API/users/login`, { nome, password });
      const usuario = response.data;
      setId(usuario.id || null);
      setTelefone(usuario.telefone || null);
      setEmail(usuario.email || null);
      setDatan(usuario.datanascimento ? new Date(usuario.datanascimento) : null);
      setGenero(usuario.genero || null);

      const formattedDate = usuario.datanascimento ? new Date(usuario.datanascimento).toISOString().split("T")[0] : null;

      try {
        const response1 = await axios.get(`${getUrl()}/MindCare/API/pacientes/iduser/${usuario.id}`);
        const paciente = response1.data;
        setIdp(paciente.id || null);

        navigation.navigate("Navegacao1", { 
          id: usuario.id, 
          idp: paciente.id, 
          nome: usuario.nome, 
          telefone: usuario.telefone, 
          email: usuario.email, 
          password: usuario.password, 
          datanascimento: formattedDate, 
          genero: usuario.genero 
        });
      } catch (error) {
        try {
          const response2 = await axios.get(`${getUrl()}/MindCare/API/profissionais/iduser/${usuario.id}`);
          const profissional = response2.data;
          setidpro(profissional.id || null);

          console.log(`Buscando Área Profissional para o idpro: ${profissional.id}...`);
          const response3 = await axios.get(`${getUrl()}/MindCare/API/areaprof/idpro/${profissional.id}`);
          console.log("Resposta da API (Área Profissional):", response3.data);
          const AreaPro = response3.data;
          setidap(AreaPro.id || null);

          console.log(`Buscando Área de Trabalho para idarea: ${AreaPro.idarea}...`);
          const response4 = await axios.get(`${getUrl()}/MindCare/API/areatrabalho/${AreaPro.idarea}`);
          console.log("Resposta da API (Área de Trabalho):", response4.data);
          const AreaTrabalho = response4.data;
          setidat(AreaTrabalho || null);
          setexpe(AreaTrabalho.area || null);
          
          navigation.navigate("Navegacao2",{ 
            id: usuario.id, 
            idp: profissional.id, 
            nome, 
            telefone, 
            email, 
            password, 
            datanascimento: formattedDate, 
            genero ,
            expe
          });

        }catch (error) {
          Alert.alert("ND por aq"+ error)
        }
      }
    } catch (error) {
      setEspaco("Senha ou nome incorretos.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.welcomeText, { fontWeight: "bold" }]}>Iniciar Sessão</Text>
      <TextInput style={styles.textbox} value={nome} onChangeText={setNome} placeholder="Nome de usuario"  placeholderTextColor={'#c0c0c0'}/>
      <TextInput style={styles.textbox} secureTextEntry={true} value={password} onChangeText={setPassword} placeholder="Senha" placeholderTextColor={'#c0c0c0'}/>
      <Text style={styles.esqueci}>Esqueci a password!</Text>
      <Text style={{ fontSize: 11, color: "red" }}>{espaco}</Text>
      <TouchableOpacity style={styles.button} onPress={iniciar}>
        <Text style={styles.buttonText}>Iniciar Sessão</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "#37C231",
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
  esqueci: {
    color: "#fff",
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