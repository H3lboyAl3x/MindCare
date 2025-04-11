import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getUrl } from "@/app/utils/url";
import axios from "axios";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

interface Chat {
    id: number;
    idpaci: number;
    idpro: number;
}
interface NumeroP {
    id: number;
    idprof: number;
    idpac: number;
}

export default function Proficional({navigation, route}){
    const { idu, idp, id, nome, email, telefone, datanascimento, experiencia, areaTrabalho} = route.params;
    const CriarConversa = async () => {
        try {
            const resposta = await axios.get<Chat[]>(`${getUrl()}/MindCare/API/chats`);
            const response1 = await axios.get<NumeroP[]>(`${getUrl()}/MindCare/API/numeroP`);
            const chats = resposta.data;
            const numerops = response1.data;
            const numeropExistente = numerops.find((numeroP : NumeroP) => numeroP.idpac === idp && numeroP.idprof === id);
            const chatExistente = chats.find((chat: Chat) => chat.idpaci === idp && chat.idpro === id);

            if (chatExistente) {
                navigation.navigate('Mensagem', {
                    idchats: chatExistente.id,
                    nome: nome,
                    id: idu
                });
            } else {
                const response = await axios.post(`${getUrl()}/MindCare/API/chats`, {
                    idpaci: idp,
                    idpro: id
                });
                await axios.post(`${getUrl()}/MindCare/API/numeroP`,{
                    idprof: id,
                    idpac: idp
                })
                navigation.navigate('Mensagem', {
                idchats: response.data.id,
                nome: nome,
                id: idu
                });
            }
        } catch (error) {
            console.error("Erro ao criar ou buscar chat:", error);
        }
    };
    const CriarConsulta =  async () => {
        navigation.navigate('MarcarConsulta',{
            idpaci: idp,
            idpro: id,
        } )
    }
    return(
        <View style={styles.container}>
            <View style={{height: '85%'}}>
            <View style={styles.quadro}/>
            <View style={styles.bfoto}>
                <Ionicons style={styles.foto} name="person-circle-outline" size={100} color={'black'} ></Ionicons>
                <Text style={{textAlign: 'center'}}>{nome}</Text>
                <TouchableOpacity style={styles.encrenagem} onPress={() => navigation.navigate('DetalhesProfissional', {
                    id: id,
                    nome: nome,
                    email: email,
                    telefone: telefone,
                    datanascimento: datanascimento,
                    experiencia: experiencia,
                    areaTrabalho: areaTrabalho
                })}>
                    <Ionicons style={{backgroundColor: 'white', borderRadius: 50}} name="ellipsis-horizontal-circle-outline" size={40} color={'black'} />
                </TouchableOpacity>
                <Text style={styles.textA}>Expecialidade</Text>
                <Text style={styles.textB}>{areaTrabalho}</Text>
                <Text style={styles.textA}>Tempo de Experiencia</Text>
                <Text style={styles.textB}>{experiencia} ano(s)</Text>
                <View style={styles.logoContainer}>
                    <View style={styles.circle}>
                        <Image
                        source={{ uri: 'https://img.freepik.com/vetores-premium/trevo-com-quatro-folhas-isoladas-no-fundo-branco-conceito-da-sorte-no-estilo-cartoon-realista_302536-46.jpg' }}
                        style={styles.logo}
                        />
                  </View>
                </View>
            </View>
            </View>
            <View style={styles.Botoes}>
                <TouchableOpacity style={[styles.botao, {alignSelf: 'flex-start'}]} onPress={() => CriarConversa()}><Text style={styles.btext}>Enviar Mensagem</Text></TouchableOpacity>
                <TouchableOpacity style={[styles.botao, {alignSelf: 'flex-end'}]} onPress={() => CriarConsulta()}><Text style={styles.btext}>Marcar Consulta</Text></TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    quadro: {
        marginTop: 40,
        backgroundColor: '#4CD964',
        width: '95%',
        height: 200,
        alignSelf: 'center',
        borderRadius: 25,
    },
    bfoto: {
        position: "absolute", 
        top: 180,
        left: 140,
        width: 115,
        height: 115,
        borderColor: '#4CD964',
        borderWidth: 2,
        borderRadius: 60,
    },
    foto: {
        width: 110,
        height: 110,
        borderRadius: 60,
        borderWidth: 5,
        borderColor: 'white',
        backgroundColor: 'white'
    },
    encrenagem: {
        position: "absolute", 
        top: 35,
        left: 130,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#4CD964'
    },
    Menu: {
        marginTop: 130,
        backgroundColor: '#EEEEEF',
        width: '100%',
        height: 50,
        borderRadius: 10,
        flexDirection: 'row', 
        alignItems: "center", 
        justifyContent: "space-between"
    },
    menu1: {
        marginLeft: 3,
        borderRadius: 10,
        height: '90%',
        width: '50%'
    },
    menu2: {
        marginRight: 40,
        borderRadius: 10,
        height: '90%',
        width: '50%'
    },
    text: {
        paddingTop: 10,
        textAlign: 'center',
        fontSize: 15,
    },
    textA: {
      fontSize: 17,
      textAlign: 'center',
      alignSelf: 'center',
      width: 200
    },
    textB: {
      fontSize: 15,
      textAlign: 'center',
      alignSelf: 'center',
      backgroundColor: '#D9D9D9',
      borderRadius: 25,
      width: 200,
    },
    logoContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: 20,
      borderRadius: 200,
      borderWidth: 2,
      borderColor: '#4CD964',
      width: 150,
      height: 150
    },
    circle: {
      width: '80%',
      height: '80%',
      borderRadius: 200,
      borderWidth: 2,
      borderColor: '#4CD964',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: '95%',
      height: '95%',
      borderRadius: 200,
    },
    Botoes: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      width: "100%",
    },
    botao: {
      backgroundColor: '#4CD964',
      width: 180,
      height: 50,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
    },
    btext: {
      fontSize: 15,
      textAlign: 'center',
      color: 'white',
    }
});