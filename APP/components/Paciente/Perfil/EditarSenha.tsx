import { TopWaves } from "@/app/TopWaves";
import { getUrl } from "@/app/utils/url";
import axios from "axios";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput,  } from "react-native";


export default function EditarSenha({navigation,route}){
    const {id, idp, nome, telefone, email, password, datanascimento, genero} = route.params;
    const [oldsenha, setosenha] = useState("");
    const [newsenha, setnsenha] = useState("");
    const [confirmarsenha, setcsenha] = useState("");
    const [espaco, setEspaco] = useState("");



    const Editar = async () => {
        if(oldsenha != password){
            setEspaco("Senha incorreta");
        }else if(newsenha != confirmarsenha)
        {
            setEspaco("As senhas nao combinam");
        }else if(!oldsenha || !newsenha || !confirmarsenha)
        {
            setEspaco("Todos os espacos devem ser preenchidos");
        }else{
            try {
                const response = await axios.put(`${getUrl()}/MindCare/API/users/${id}`, {
                    nome: nome,
                    email: email,
                    telefone: telefone,
                    datanascimento: datanascimento,
                    password: newsenha,
                    genero: genero,
                });
                const user = response.data
                console.log(user)
                navigation.navigate("Navegacao1", { 
                        id: user.id, 
                        idp: idp, 
                        nome: user.nome, 
                        telefone: user.telefone, 
                        email: user.email, 
                        password: user.password, 
                        datanascimento: datanascimento, 
                        genero: user.genero 
                });
    
            } catch (error) {
            console.error("Erro ao Editar", "Tente novamente mais tarde. "+error);
            }
        }
    };

  return (
    <View style={styles.container}>
      <TopWaves/>
        <View style={styles.Menu}>
        <Text style={styles.title}>Alterar Senha</Text>
        <TextInput style={styles.textbox} value={oldsenha} onChangeText={setosenha} secureTextEntry={true} placeholder="Digite a senha antiga" placeholderTextColor={'#6fcf87'}/>
        <TextInput style={styles.textbox} value={newsenha} onChangeText={setnsenha} secureTextEntry={true} placeholder="Diginte a senha nova" placeholderTextColor={'#6fcf87'}/>
        <TextInput style={styles.textbox} value={confirmarsenha} onChangeText={setcsenha} secureTextEntry={true} placeholder="Confirma a senha nova" placeholderTextColor={'#6fcf87'}/>
        <Text style={{fontSize: 11, color: 'red'}}>{espaco}</Text>
        <TouchableOpacity style={styles.button} onPress={Editar}>
            <Text style={styles.buttonText}>Alterar</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: -20,
  },
  Menu: {
    width: '100%',
    height: '80%',
    alignItems: "center",
    justifyContent: 'center',
  },
  title: {
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