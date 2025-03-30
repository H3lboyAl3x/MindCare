import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { getUrl } from "@/app/utils/url";
import axios from "axios";

type Consulta = {
    id: number;
    data: string;
    hora: string;
    idpaci: number;
    idpro: number;
    status: string;
};

export default function Consulta({navigation, route}) {
    const {idp} = route.params;
    const [consultas, setConsultas] = useState<Consulta[]>([]);
    
    const buscarConsultas = async () => {
        try {
            const responde = await axios.get<Consulta[]>(`${getUrl()}/MindCare/API/consultas`);
            const consultasseparada = responde.data;
            const consultasfiltrada = consultasseparada.filter((consulta) => consulta.idpaci === idp && consulta.status === "Pendente");
            setConsultas(consultasfiltrada);

        } catch (error) {
            console.error("Erro ao buscar consultas:", error);
        }
    };


    useEffect(() => {
        buscarConsultas();
        const intervalo = setInterval(buscarConsultas, 1000);
        return () => clearInterval(intervalo);
    }, [idp]);
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Consultas</Text>
            <FlatList
                style={styles.Inf}
                data={consultas}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card}>
                        <View>
                            <Text style={styles.consultaText}>Consulta {item.id}</Text>
                            <Text style={styles.consultaText}>Data: {item.data ? item.data.toString().split("T")[0] : ""}</Text>
                            <Text style={styles.consultaText}>Hora: {item.hora}</Text>
                            <Text style={styles.consultaText}>Status: {item.status}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#37C231",
    },
    titulo: {
        fontSize: 25,
        marginBottom: 10,
        backgroundColor: '#37C231',
        color: '#fff',
        height: 40,
        textAlign: 'center'
    },
    card: {
        padding: 15,
        backgroundColor: "#f0f0f0",
        height: 100,
        borderRadius: 20,
        marginTop: 5,
        marginHorizontal: 5,
    },
    consultaText: {
        fontSize: 14,
        color: "#000",
    },
    Inf: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#fff'
    },
});