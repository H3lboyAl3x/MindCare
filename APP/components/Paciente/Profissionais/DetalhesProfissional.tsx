import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, } from "react-native";
import { Ionicons } from "@expo/vector-icons";


export default function DetalhesProfissional({route}){
    const {id, nome, email, telefone, datanascimento, experiencia, areaTrabalho} = route.params;
    return(
        <View style={styles.container}>
            <Ionicons style={styles.perfil} name="person-circle-outline" size={100} color={'black'} ></Ionicons>
            <Text style={styles.text}>Nome:{nome}</Text>
            <Text style={styles.text}>Telefone:{telefone}</Text>
            <Text style={styles.text}>Email:{email}</Text>
            <Text style={styles.text}>Data de Nascimento:{datanascimento}</Text>
            <Text style={styles.text}>Area de Trabalho:{areaTrabalho}</Text>
            <Text style={styles.text}>Experiencia:{experiencia}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    perfil: {
        margin: 10,
        borderRadius:50,
        width: 100,
        height: 100,
    },
    text: {
        fontSize: 20,
        borderBottomWidth: 1,
        width: '95%',
        marginTop: 20,
    }
});