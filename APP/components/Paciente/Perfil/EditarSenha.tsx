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
        <Text style={styles.title}>Alterar Senha</Text>
        <TextInput style={styles.textbox} value={oldsenha} onChangeText={setosenha} secureTextEntry={true} placeholder="Digite a senha antiga" placeholderTextColor={'#c0c0c0'}/>
        <TextInput style={styles.textbox} value={newsenha} onChangeText={setnsenha} secureTextEntry={true} placeholder="Diginte a senha nova" placeholderTextColor={'#c0c0c0'}/>
        <TextInput style={styles.textbox} value={confirmarsenha} onChangeText={setcsenha} secureTextEntry={true} placeholder="Confirma a senha nova" placeholderTextColor={'#c0c0c0'}/>
        <Text style={{fontSize: 11, color: 'red'}}>{espaco}</Text>
        <TouchableOpacity style={styles.button} onPress={Editar}>
            <Text style={styles.buttonText}>Trocar</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37C231',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
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