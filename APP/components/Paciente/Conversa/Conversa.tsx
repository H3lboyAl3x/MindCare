import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function Conversa()
{
    return(
        <View style={styles.container}>
            <View style={styles.barraT}>
                <Text style={styles.titulo}>Conversas</Text>
            </View>
            <TouchableOpacity style={styles.pessoa}>
                <View>
                    <Text style={[styles.textp, {color: '#757575'}]}>Pessoa01</Text>
                    <Text style={[styles.textp, {color: '#B3B3B3'}]}>Mensagem01</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    barraT: {
        width: '100%',
        height: 50,
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    pessoa: {
        justifyContent: 'center',
        display: 'flex',
        width: '100%',
    },
    textp: {
        fontSize: 15,
    },
});