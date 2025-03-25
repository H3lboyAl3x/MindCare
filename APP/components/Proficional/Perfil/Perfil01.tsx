import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Perfil01({navigation})
{

    const [cormenu1, setmenu1] = useState('white');
    const [cormenu2, setmenu2] = useState('#EEEEEF');

    const Funcaobotao1 = () => {
        setmenu1('white');
        setmenu2('#EEEEEF');
    };
    const Funcaobotao2 = () => {
        setmenu2('white');
        setmenu1('#EEEEEF');
    };

    return(
        <View style={styles.container}>
            <View style={styles.barra}>
                <Text style={styles.titulo}>Perfil</Text>
                <TouchableOpacity style={styles.encrenagem} onPress={() => navigation.navigate('EditarPerfil')}>
                    <Ionicons name="ellipsis-vertical-outline" size={40} color={'black'} />
                </TouchableOpacity>
            </View>
            <View style={styles.quadro}/>
            <View style={styles.bfoto}>
                <View style={styles.foto}/>
                <Text>NOME</Text>
            </View>
            <View style={styles.Menu}>
                <TouchableOpacity style={[styles.menu1, {backgroundColor: cormenu1}]} onPress={Funcaobotao1}>
                    <Text style={styles.text}>Lista de consultas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.menu2, {backgroundColor: cormenu2}]} onPress={Funcaobotao2}>
                    <Text style={styles.text}>Lista de Psicologos</Text>
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
    quadro: {
        backgroundColor: '#D9D9D9',
        width: '100%',
        height: 200,
    },
    bfoto: {
        position: "absolute", 
        top: 180,
        left: 20,
        width: 120,
        height: 200,
        borderColor: 'white',
    },
    foto: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 5,
        borderColor: 'white',
        backgroundColor: 'black',
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
});