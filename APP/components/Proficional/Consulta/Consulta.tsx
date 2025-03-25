import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function Consulta()
{
    return(
        <View style={styles.container}>
            <View style={styles.barra}>
                <Text style={styles.titulo}>Consulta</Text>
                <TouchableOpacity style={styles.encrenagem}>
                    <Ionicons name="add-circle-outline" size={40} color={'black'} />
                </TouchableOpacity>
            </View>
            <View style={styles.logoContainer}>
                <View style={styles.circle}>
                    <Image
                        source={{ uri: 'https://img.freepik.com/vetores-premium/trevo-com-quatro-folhas-isoladas-no-fundo-branco-conceito-da-sorte-no-estilo-cartoon-realista_302536-46.jpg' }}
                        style={styles.logo}/>
                </View>
            </View>
            <Text style={styles.consultatext}>Consulta01</Text>
            <Text style={styles.datatext}>DATA</Text>
            <View style={styles.opcao}>
                <TouchableOpacity style={[styles.botao, {backgroundColor: '#14AE5C'}]}>
                    <Text style={styles.text}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.botao, {backgroundColor: '#EC221F'}]}>
                    <Text style={styles.text}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    barra: {
        flexDirection: 'row', 
        alignItems: "center", 
        justifyContent: "space-between"
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    encrenagem: {
        marginRight: 10,
    },
    logoContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      marginTop:50,
      borderRadius: 200,
      borderWidth: 2,
      borderColor: '#34C759',
      width: '95%',
      height: 395
    },
    circle: {
      width: '80%',
      height: 310,
      borderRadius: 200,
      borderWidth: 2,
      borderColor: '#40C900',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: '95%',
      height: '95%',
      borderRadius: 200,
    },
    consultatext: {
        fontSize: 20,
        textAlign: 'center',
    },
    datatext: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10,
    },
    opcao: {
        flexDirection: 'row', 
        alignItems: "center", 
        justifyContent: "space-between"
    },
    botao: {
        width: 130,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        borderRadius: 25,
        marginTop: 40,
    },
    text: {
        fontSize: 15,
        color: 'white',
    },
});