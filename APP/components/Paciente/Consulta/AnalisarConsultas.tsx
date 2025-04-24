import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getUrl } from "@/app/utils/url";
import axios from "axios";

export default function AnalisarConsultas({navigation, route}) {
    const {idConsulta, dataConsulta, horaConsulta, idpaci, idp, statusConsulta, link} = route.params;

    console

    const pegarData = () => {
        const agora = new Date();
        const ano = agora.getFullYear();
        const mes = (agora.getMonth() + 1).toString().padStart(2, '0'); // +1 porque começa do zero
        const dia = agora.getDate().toString().padStart(2, '0');
    
      return `${ano}-${mes}-${dia}`;
      };
      const PegarHora = () => {
        const agora = new Date();
        const hora = agora.getHours().toString().padStart(2, '0');
        const minutos = agora.getMinutes().toString().padStart(2, '0');
        return `${hora}:${minutos}`;
      };

    const formattedDate = new Date(dataConsulta).toISOString().split("T")[0];
    const formattedTime = horaConsulta.slice(0, 5);
    const Adiarconsulta = async () => {
        navigation.navigate("AdiarConsulta", { idConsulta: idConsulta, dataConsulta: dataConsulta, horaConsulta: horaConsulta, idpaci: idpaci, idp: idp, statusConsulta: statusConsulta });
    };
    const entrarNaChamada = async () => {
        if (link && dataConsulta.toString().split("T")[0] === pegarData() || horaConsulta <= pegarData() ) {
            Alert.alert(
                'Antes de iniciar a consulta...',
                'Certifique-se de estar em um local tranquilo e com uma boa conexão à internet. Ao ingressar, você passará por uma tabela de seleção. Por favor, selecione a opção "Aguardar por anfitrião" e aguarde a entrada do profissional. Caso o profissional não esteja presente após 20 minutos de espera, entre em contato com o suporte para assistência.',
                [
                  {
                    text: 'OK',
                    onPress: () => Linking.openURL(link),
                  },
                ],
                { cancelable: false }
              );
        } else {
            alert('A consulta ainda não está disponível, por favor entre no horario marcado, obrigado.');
        }
      };

   
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Consultas</Text>
                <Image
                    source={{ uri: 'https://img.freepik.com/vetores-premium/trevo-com-quatro-folhas-isoladas-no-fundo-branco-conceito-da-sorte-no-estilo-cartoon-realista_302536-46.jpg' }}
                    style={styles.logo}
                />
            <Text style={styles.consultaText}>Data: {formattedDate}     |     Hora: {formattedTime}</Text>
            <View style={styles.Vbotao}>
                <TouchableOpacity style={styles.botao} onPress={Adiarconsulta}><Text style={styles.buttonText}>Adiar</Text></TouchableOpacity>   
                <TouchableOpacity style={styles.botao} onPress={entrarNaChamada}>
                <Ionicons name="videocam" size={20} color="#7EBF42" />
                <Text style={styles.buttonText}> Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#4CD964",
    },
    titulo: {
        fontSize: 25,
        marginBottom: 10,
        backgroundColor: '#4CD964',
        color: '#fff',
        height: 40,
        textAlign: 'center'
    },
    logo: {
        marginTop: 40,
        width: 200,
        height: 200,
        borderRadius: 200,
        alignSelf: 'center',
    },
    consultaText: {
        fontSize: 18,
        color: "#fff",
        textAlign: 'center',
        marginTop: 40,
        backgroundColor: '#2a8c26',
    },
    Vbotao: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 150
    },
    botao: {
        width: 150,
        height: 50,
        marginHorizontal: 25,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    buttonText: {
      color: '#7EBF42',
      fontSize: 18,
      fontWeight: 'bold',
    },
});