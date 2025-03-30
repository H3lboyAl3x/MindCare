import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ExibirInformacao({ navigation, route }) {
    const { id, idp, nome, telefone, email, password, datanascimento, genero } = route.params;

    return (
        <View style={styles.container}>
            <Ionicons style={styles.perfil} name="person-circle-outline" size={100} color={'white'} />
            <View style={styles.Inf}>
                <Text style={styles.text}>Nome: {nome}</Text>
                <Text style={styles.text}>Telefone: {telefone}</Text>
                <Text style={styles.text}>Email: {email}</Text>
                <Text style={styles.text}>Data de Nascimento: {datanascimento}</Text>
                <Text style={styles.text}>Gênero: {genero}</Text>

                <TouchableOpacity 
                    style={styles.EP} 
                    onPress={() => navigation.navigate('EditarPerfil', {
                        ide: id,
                        idpe: idp,
                        nomee: nome,
                        telefonee: telefone,
                        emaile: email,
                        passworde: password,
                        datanascimentoe: datanascimento,
                        generoe: genero
                    })}
                >
                    <Text style={{ fontSize: 20, color: 'white' }}>Editar Perfil</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#37C231',
    },
    perfil: {
        margin: 10,
        borderRadius: 50,
        width: 100,
        height: 100,
    },
    Inf: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        borderBottomWidth: 1,
        width: '95%',
        marginTop: 30,
    },
    EP: {
        marginTop: 50,
        backgroundColor: '#14AE5C',
        width: '90%',
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
