import { TopWaves } from "@/app/TopWaves";
import { getUrl } from "@/app/utils/url";
import axios from "axios";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, SafeAreaView, KeyboardAvoidingView, ScrollView, Image, Platform } from "react-native";


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

    if(Platform.OS === 'web'){
        return(
          <SafeAreaView style={stylesWeb.safeArea}>
                  {/* Cabeçalho */}
                  <View style={stylesWeb.header}>
                    <Image
                      source={{ uri: "https://aebo.pt/wp-content/uploads/2024/05/spo-300x300.png" }}
                      style={stylesWeb.logoHeader}
                    />
                  </View>
          
                  {/* Corpo */}
                  <View style={stylesWeb.container}>
                    {/* Coluna Esquerda */}
                    <View style={stylesWeb.left}>
                      <Text style={stylesWeb.title}>Editar Conta</Text>
                      <Image
                        source={{ uri: "https://cdn-icons-png.flaticon.com/512/4088/4088981.png" }}
                        style={stylesWeb.leftImage}
                      />
                    </View>
          
                    {/* Coluna Direita */}
                    <View style={stylesWeb.right}>
                      <View style={stylesWeb.form}>
                        <Text style={stylesWeb.formTitle}>Preencha os dados</Text>
                        <TextInput
                          style={stylesWeb.input}
                          placeholder='Senha Antiga'
                          value={oldsenha}
                          onChangeText={setosenha}
                        />
                        <TextInput
                          style={stylesWeb.input}
                          placeholder='Senha Nova'
                          value={newsenha}
                          onChangeText={setnsenha}
                        />
                        <TextInput
                          style={stylesWeb.input}
                          placeholder='Confirmar Senha Nova'
                          keyboardType="email-address"
                          value={confirmarsenha}
                          onChangeText={setcsenha}
                        />
                        <TouchableOpacity onPress={Editar}>
                          <LinearGradient colors={["#2E8B57", "#4CD964"]} style={stylesWeb.button}>
                            <Text style={stylesWeb.buttonText}>Editar</Text>
                          </LinearGradient>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </SafeAreaView>
        );
      }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <ScrollView contentContainerStyle={styles.inner} keyboardShouldPersistTaps="handled">
            <Image
              source={{ uri: "https://img.freepik.com/vetores-premium/trevo-com-quatro-folhas-isoladas-no-fundo-branco-conceito-da-sorte-no-estilo-cartoon-realista_302536-46.jpg" }}
                style={styles.logo}
              />
            <Text style={styles.title}>Preencha os dados</Text>
            <TextInput style={styles.textbox} value={oldsenha} onChangeText={setosenha} placeholder='Senha Antiga' />
            <TextInput style={styles.textbox} value={newsenha} onChangeText={setnsenha} placeholder='Senha Nova' />
            <TextInput style={styles.textbox} value={confirmarsenha} onChangeText={setcsenha} placeholder='Confirmar Senha Nova' />
            <Text style={{fontSize: 11, color: 'red'}}>{espaco}</Text>
      <TouchableOpacity onPress={Editar}>
        <LinearGradient colors={['#2E8B57', '#4CD964']} style={styles.button}>
            <Text style={styles.buttonText}>Editar</Text>
          </LinearGradient>
      </TouchableOpacity>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#20613d"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30
  },
  inner: {
    alignItems: "center",
    width: "100%",
    gap: 15,
  },
  logo: {
    width: 140,
    height: 140,
    borderRadius: 80,
    backgroundColor: "#e7fbe6",
    marginBottom: 5,
    marginTop: 5,
  },
  Menu: {
    width: '100%',
    height: '80%',
    alignItems: "center",
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#4CD964"
  },
  textbox: {
    marginTop: 5,
    color: "#4CD964",
    width: 300,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#e3e6e3",
    textAlign: "center"
  },
  input: {
    marginTop: 5,
    width: 300,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#e3e6e3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 220,
    height: 52,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold"
  },
});

const stylesWeb = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    height: 80,
    backgroundColor: "#005631",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 40,
  },
  logoHeader: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#ffffff",
  },
  left: {
    flex: 1,
    backgroundColor: "#005631",
    padding: 60,
    justifyContent: "center",
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    color: "#dcdcdc",
    marginBottom: 40,
  },
  leftImage: {
    width: "80%",
    height: 250,
    resizeMode: "contain",
  },
  right: {
    flex: 1,
    backgroundColor: "#e8ffe9",
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    paddingTop: 5,
  },
  form: {
    width: "100%",
    maxWidth: 400,
    gap: 20,
    alignItems: "center",
  },
  formTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#2E8B57",
    marginBottom: 1,
  },
  input: {
    width: "100%",
    height: 50,
    borderRadius: 30,
    backgroundColor: "#e3e6e3",
    textAlign: "center",
    fontSize: 16,
    color: "#4CD964",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 1,
  },
  button: {
    width: "100%",
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 300,
    backgroundColor: '#37C231',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff'
  },
  modalItem: {
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    color: '#fff',
  },
});