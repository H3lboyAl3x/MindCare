import React from "react";
import { View, Text, TouchableOpacity, StyleSheet,  } from "react-native";


export default function EditarPerfil()
{
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <View style={styles.perfil}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.editor}>
                <Text style={styles.text}>Nome:</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.editor}>
                <Text style={styles.text}>Telefone:</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.editor}>
                <Text style={styles.text}>Email:</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.editor}>
                <Text style={styles.text}>Data de Nascimento:</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.editor}>
                <Text style={styles.text}>Password:</Text>
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
    perfil: {
        margin: 10,
        backgroundColor: 'red',
        borderRadius:50,
        width: 100,
        height: 100,
    },
    editor: {
        width: '90%',
        height: 50,
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    text: {
        fontSize: 18,
    }
});