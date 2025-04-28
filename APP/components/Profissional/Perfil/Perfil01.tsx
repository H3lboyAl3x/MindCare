import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getUrl } from "@/app/utils/url";
import axios from "axios";

interface Consultas {
    id: number;
    data: string;
    hora: string;
    idpaci: number;
    idpro: number;
    status: string;
}

interface Paciente {
    id: number;
    tempoexperiencia: number;
    iduser: number;
}

interface Usuario {
   id: number;
   nome: string;
   email: string;
   telefone: string;
   datanascimento: string;
}

interface PacienteComNome {
   id: number;
   nome: string;
   email: string;
   telefone: string;
   datanascimento: string;
}
 
interface NumeroP {
   id: number;
   idprof: number;
   idpac: number;
}

export default function Perfil01({navigation, route}){
    const {id, idp, nome, telefone, email, password, datanascimento, genero, espe, expe} = route.params;
    const [opcaoSelecionada, setOpcaoSelecionada] = useState<"consulta" | "paciente">("consulta");
    const [consultas, setconsultas] = useState<Consultas[]>();
    const [paciente, setPaciente] = useState<PacienteComNome[]>([]);

    //Buscar Consultas e Paciente
    const ListaConsulta = async () =>{
        try {
            const consultaResponde = await axios.get<Consultas[]>(`${getUrl()}/MindCare/API/consultas`);
            const listaconsulta = consultaResponde.data;
            const consultasUnicas = listaconsulta.filter((consulta) => consulta.idpaci === idp);
            setconsultas(consultasUnicas);

            const NP = await axios.get<NumeroP[]>(`${getUrl()}/MindCare/API/numeroP/idprof/${idp}`);
            const listaPaciente = NP.data;
            const pacienteComNomes: PacienteComNome[] = await Promise.all(
                listaPaciente.map(async (Numero) => {
                try {
                    const pacResponse = await axios.get<Paciente>(`${getUrl()}/MindCare/API/pacientes/${Numero.idpac}`);
                    const userResponse = await axios.get<Usuario>(getUrl()+"/MindCare/API/users/"+pacResponse.data.iduser);

        ;            return {
                    id: Numero.idprof,
                    nome: userResponse.data.nome,
                    email: userResponse.data.email,
                    telefone: userResponse.data.telefone,
                    datanascimento: userResponse.data.datanascimento ? userResponse.data.datanascimento.toString().split("T")[0] : "",
                    };
                } catch (error) {
                    console.error(`Erro ao buscar numeroP ${Numero.idpac}:, error`);
                    return {
                    id: Numero.idprof,
                    nome: "Desconhecido",
                    email: "Desconhecido",
                    telefone: "Desconhecido",
                    datanascimento: "Desconhecido",
                    };
                }
                })
            );
            setPaciente(pacienteComNomes);
        }catch (error){
            console.error('erro a buscar consultas: '+error);

        }
    }


    


    const [cormenu1, setmenu1] = useState('white');
    const [cormenu2, setmenu2] = useState('#EEEEEF');
    useEffect(() => {
        ListaConsulta();
        const intervalo = setInterval(ListaConsulta, 1000);
        return () => clearInterval(intervalo);
      }, [idp]);

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
            <View style={styles.quadro}/>
            <View style={styles.bfoto}>
                <View>
                    <Ionicons style={styles.foto} name="person-circle-outline" size={100} color={'black'} ></Ionicons>
                    <TouchableOpacity style={styles.encrenagem} onPress={() => navigation.navigate('ExibirInformacaop', {
                        id: id,
                        idp: idp,
                        nome: nome,
                        telefone: telefone,
                        email: email,
                        password: password,
                        datanascimento: datanascimento,
                        genero: genero,
                        espe: espe,
                        expe: expe,
                    })}>
                    <Ionicons style={{backgroundColor: 'white', borderRadius: 50}} name="ellipsis-horizontal-circle-outline" size={40} color={'black'} />
                </TouchableOpacity>
                </View>
                <Text style={{textAlign: 'center', fontSize: 17}}>{nome}</Text>
                <Text style={{textAlign: 'center', fontSize: 15}}>Area de Trabalho:</Text>
                <Text style={{textAlign: 'center', fontSize: 13}}>{espe}</Text>
                <Text style={{textAlign: 'center', fontSize: 15}}>Experiencia:</Text>
                <Text style={{textAlign: 'center', fontSize: 13}}>{expe}</Text>
            </View>
            <View style={styles.Menu}>
                <TouchableOpacity style={[styles.menu1, {backgroundColor: cormenu1}]} onPress={() =>{ Funcaobotao1(); setOpcaoSelecionada('consulta')}}>
                    <Text style={styles.text}>Lista de consultas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.menu2, {backgroundColor: cormenu2}]} onPress={() =>{ Funcaobotao2(); setOpcaoSelecionada('paciente')}}>
                    <Text style={styles.text}>Lista de Pacientes</Text>
                </TouchableOpacity>
            </View>
            {/* Exibir Conteúdo da seleção */}
            {opcaoSelecionada === "consulta" && (
                <FlatList
                data={consultas}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.nome}>Consulta: {item.id}</Text>
                        <Text>{item.data.toString().split("T")[0]}</Text>
                        <Text>Estado: {item.status}</Text>
                    </View>
                )}/>
            )}
            {opcaoSelecionada === "paciente" && (
                <FlatList
                data={paciente}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.nome}>{item.nome}</Text>
                    </View>
                )}/>
            )}
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
        backgroundColor: '#37C231',
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
        borderColor: '#37C231',
        borderWidth: 2,
        borderRadius: 60,
    },
    foto: {
        width: 110,
        height: 110,
        borderRadius: 60,
        borderWidth: 5,
        borderColor: 'white',
        backgroundColor: 'white',
    },
    encrenagem: {
        position: "absolute", 
        top: 35,
        left: 130,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#37C231'
    },
    Menu: {
        marginTop: 200,
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
    card: {
        backgroundColor: "#f0f0f0",
        padding: 10,
        borderRadius: 20,
        marginTop: 5,
        marginHorizontal: 5,
        height: 70,
        justifyContent: 'center',
    },
    nome: {
        fontSize: 16,
        fontWeight: "bold",
    },
});