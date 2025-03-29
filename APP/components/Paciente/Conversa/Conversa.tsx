import React, { useEffect, useState } from "react";
import { 
  View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator 
} from "react-native";
import axios from "axios";
import { getUrl } from "@/app/utils/url";

interface Chat {
    id: number;
    idpaci: number;
    idpro: number;
}

interface Mensagem {
    id: number;
    idchat: number;
    remetente: number;
    conteudo: string;
    data: string;
    hora: string;
}

interface Profissional {
    id: number;
    tempoexperiencia: number;
    iduser: number;
}

interface Usuario {
    id: number;
    nome: string;
}

interface ConversaItem {
    id: number;
    nome: string;
    ultimaMensagem: string;
    hora: string;
}

export default function Conversa({navigation, route}) {
    const {id, idp} = route.params;
    const [conversas, setConversas] = useState<ConversaItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const userId = idp;
    const [idchats, setidchats] = useState(null);
    const [nome, setnome] = useState(null);

    const fetchConversas = async () => {
        try {
            const response = await axios.get(`${getUrl()}/MindCare/API/chats/idpaci/${userId}`);
    
            if (!response.data || !Array.isArray(response.data)) {
                console.error("Resposta inesperada da API:", response.data);
                setConversas([]);
                return;
            }
    
            const chats = response.data;
    
            const conversasFormatadas = await Promise.all(
                chats.map(async (chat) => {
                    try {
                        const profissionalResponse = await axios.get(`${getUrl()}/MindCare/API/profissionais/${chat.idpro}`);
                        const profissional = profissionalResponse.data;
                        
                        const usuarioResponse = await axios.get(`${getUrl()}/MindCare/API/users/${profissional.iduser}`);
                        const usuario = usuarioResponse.data;
    
                        const mensagemResponse = await axios.get(`${getUrl()}/MindCare/API/mensagens/idchat/${chat.id}`);
                        const mensagens = mensagemResponse.data;
                        const ultimaMensagem = mensagens.length > 0 ? mensagens[mensagens.length - 1] : null;
                        setidchats(chat.id);
                        setnome(usuario.nome);
                        return {
                            id: chat.id,
                            nome: usuario.nome,
                            ultimaMensagem: ultimaMensagem ? ultimaMensagem.conteudo : "Nenhuma mensagem",
                            hora: ultimaMensagem ? ultimaMensagem.hora?.substring(0, 5) : "", // Pega só HH:mm
                            };

                    } catch (error) {
                        console.error(`Erro ao processar chat ${chat.id}:`, error);
                        return {
                            id: chat.id,
                            nome: "Desconhecido",
                            ultimaMensagem: "Erro ao carregar",
                            hora: "",
                        };
                    }
                })
            );
    
            setConversas(conversasFormatadas);
        } catch (error) {
            console.error("Erro ao buscar conversas:", error);
        } finally {
        }
    };
    

    useEffect(() => {
        fetchConversas();
        const intervalo = setInterval(fetchConversas, 1000);
        return () => clearInterval(intervalo);
    }, [id]);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Conversas</Text>
            <FlatList
                data={conversas}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.pessoa} onPress={() => navigation.navigate('Mensagem', {idchats: item.id, nome: item.nome, id})}>
                        <View>
                            <Text style={[styles.textp, { color: "#757575" }]}>{item.nome}</Text>
                            <Text style={[styles.textp, { color: "#B3B3B3" }]}>{item.ultimaMensagem}</Text>
                            {item.hora && <Text style={[styles.textp, { color: "#B3B3B3", fontSize: 12, textAlign: 'right' }]}>{item.hora}</Text>}
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
        backgroundColor: "#fff",
        padding: 10,
    },
    titulo: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 10,
    },
    pessoa: {
        padding: 15,
        borderBottomColor: "#ddd",
        height: 80,
    },
    textp: {
        fontSize: 15,
    },
});

