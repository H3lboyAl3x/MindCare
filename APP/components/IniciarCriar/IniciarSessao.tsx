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
          nome, 
          telefone, 
          email, 
          password, 
          datanascimento: formattedDate, 
          genero 
        });
      } catch (error) {
        try {
          const response2 = await axios.get(`${getUrl()}/MindCare/API/profissionais/iduser/${usuario.id}`);
          const profissional = response2.data;
          setidpro(profissional.id || null);
          const response3 = await axios.get(`${getUrl}//MindCare/API/AreaPro/idpro/${profissional.id}`);
          const AreaPro = response3.data;
          setidap(AreaPro.id || null);
          const response4 = await axios.get(`${getUrl}/MindCare/API/areatrabalho/${AreaPro.idarea}`);
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
          Alert.alert("ND por aq")
        }
      }
    } catch (error) {
      setEspaco("Senha ou nome incorretos.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.welcomeText, { fontWeight: "bold" }]}>Iniciar Sessão</Text>
      <Text style={styles.text}>Username</Text>
      <TextInput style={styles.textbox} value={nome} onChangeText={setNome} />
      <Text style={styles.text}>Password</Text>
      <TextInput style={styles.textbox} secureTextEntry={true} value={password} onChangeText={setPassword} />
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
    backgroundColor: "#fff",
  },
  welcomeText: {
    fontSize: 24,
    color: "#000",
    textAlign: "center",
    marginTop: 100,
  },
  text: {
    marginTop: 50,
    color: "#D2D2D2",
    fontSize: 15,
  },
  textbox: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: "#D2D2D2",
    borderRadius: 10,
  },
  esqueci: {
    color: "#5BD654",
    marginRight: 150,
  },
  button: {
    width: 200,
    height: 56,
    backgroundColor: "#14AE5C",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 300,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});