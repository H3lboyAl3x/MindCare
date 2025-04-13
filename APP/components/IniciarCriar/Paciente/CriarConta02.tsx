import React, { useState, useEffect } from 'react';
import axios from "axios";
import { View, Text, TouchableOpacity, StyleSheet, Modal, FlatList, Alert, Platform, SafeAreaView, KeyboardAvoidingView, ScrollView, Image } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { getUrl } from '@/app/utils/url';
import { LinearGradient } from 'expo-linear-gradient';

export default function CriarConta02({ route, navigation }) {
  const { nome, telefone, email, password} = route.params;
  const [id, setid] = useState(null);
  const [idp, setidp] = useState(null);

  const [datanascimento, setDatan] = useState<Date | null>(null);
  const [genero, setGenero] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showGenderModal, setShowGenderModal] = useState(false);
  const [espaco, setespaco] = useState("");

  const criar2 = async () => {
    if (!datanascimento || !genero) {
      setespaco("Preencha todos os campos antes de continuar.");
      return;
    }

    const formattedDate = datanascimento.toISOString().split('T')[0];

    try {
      const response = await axios.post(`${getUrl()}/MindCare/API/users`, {
        nome,
        telefone,
        email,
        password,
        datanascimento: formattedDate,
        genero
      });
      const Usuario = response.data;
      const userId = Usuario.id;
      setid(userId);

      const response1 = await axios.post(`${getUrl()}/MindCare/API/pacientes`, {
        iduser: userId
      });
      const Paciente = response1.data;
      const idpac = Paciente.id;
      setidp(idpac);

      navigation.navigate("Navegacao1", {
        id: userId,
        idp: idpac,
        nome: Usuario.nome,
        telefone: Usuario.telefone,
        email: Usuario.email,
        password: Usuario.password,
        datanascimento: formattedDate,
        genero: Usuario.genero
      });
    } catch (error) {
      console.log("Erro ao cadastrar", "Tente novamente mais tarde."+ error);
    }
  };

  const genders = ['Masculino', 'Feminino', 'Não incluir'];
  const minimumDate = new Date(1900, 0, 1);
  const maximumDate = new Date();
  maximumDate.setFullYear(maximumDate.getFullYear() - 18);

  const onDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (event.type === 'set' && selectedDate) {
      if (selectedDate > maximumDate) {
        Alert.alert('Data inválida', 'Você deve ter pelo menos 18 anos de idade.');
      } else {
        setDatan(selectedDate);
      }
    }
    setShowDatePicker(false);
  };

  if (Platform.OS === "web") {
    return (
      <SafeAreaView style={stylesWeb.container}>
        <View style={stylesWeb.imageContainer}>
          <Image
            source={{ uri: "https://aebo.pt/wp-content/uploads/2024/05/spo-300x300.png" }}
            style={stylesWeb.logo}
          />
        </View>
        <View style={stylesWeb.content}>
          <View style={stylesWeb.inner}>
            <Text style={stylesWeb.title}>Criar Conta</Text>
            <TouchableOpacity style={stylesWeb.input}>
              <input
                type="date"
                style={{ width: '100%', height: '100%', border: 'none', backgroundColor: 'transparent', textAlign: 'center', color: datanascimento ? '#4CD964' : '#6fcf87' }}
                value={datanascimento ? datanascimento.toISOString().split('T')[0] : ''}
                onChange={(e) => {
                  const dateStr = e.target.value;
                  if (dateStr) {
                    const parts = dateStr.split("-");
                    const parsedDate = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
                    setDatan(parsedDate);
                  }
                }}
                min="1900-01-01"
                max={maximumDate.toISOString().split('T')[0]}
              />
            </TouchableOpacity>
            <TouchableOpacity style={stylesWeb.input} onPress={() => setShowGenderModal(true)}>
              <Text style={{ color: genero ? '#4CD964' : '#6fcf87' }}>
                {genero || 'Gênero'}
              </Text>
            </TouchableOpacity>

            <Modal visible={showGenderModal} transparent={true} animationType="slide" onRequestClose={() => setShowGenderModal(false)}>
              <View style={stylesWeb.modalContainer}>
                <View style={stylesWeb.modalContent}>
                  <Text style={stylesWeb.modalTitle}>Selecione o Gênero</Text>
                  <FlatList
                    data={genders}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                      <TouchableOpacity style={stylesWeb.modalItem} onPress={() => { setGenero(item); setShowGenderModal(false); }}>
                        <Text style={stylesWeb.modalText}>{item}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </View>
            </Modal>

            <Text style={{ fontSize: 11, color: 'red' }}>{espaco}</Text>

            <TouchableOpacity onPress={criar2}>
              <LinearGradient colors={['#2E8B57', '#4CD964']} style={stylesWeb.button}>
                <Text style={stylesWeb.buttonText}>Criar Conta</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={stylesMobile.safeArea}>
      <KeyboardAvoidingView behavior="padding" style={stylesMobile.container}>
        <ScrollView contentContainerStyle={stylesMobile.inner} keyboardShouldPersistTaps="handled">
          <Image
            source={{ uri: "https://img.freepik.com/vetores-premium/trevo-com-quatro-folhas-isoladas-no-fundo-branco-conceito-da-sorte-no-estilo-cartoon-realista_302536-46.jpg" }}
            style={stylesMobile.logo}
          />
          <Text style={stylesMobile.title}>Criar Conta</Text>
          <TouchableOpacity style={stylesMobile.input} onPress={() => setShowDatePicker(true)}>
            <Text style={{ color: datanascimento ? '#4CD964' : '#6fcf87' }}>
              {datanascimento ? datanascimento.toLocaleDateString('pt-BR') : 'Data de nascimento'}
            </Text>
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker
              value={datanascimento || new Date()}
              mode="date"
              display="spinner"
              minimumDate={minimumDate}
              maximumDate={maximumDate}
              onChange={onDateChange}
            />
          )}
          <TouchableOpacity style={stylesMobile.input} onPress={() => setShowGenderModal(true)}>
            <Text style={{ color: genero ? '#4CD964' : '#6fcf87' }}>
              {genero || 'Gênero'}
            </Text>
          </TouchableOpacity>

          <Modal visible={showGenderModal} transparent={true} animationType="slide" onRequestClose={() => setShowGenderModal(false)}>
            <View style={stylesMobile.modalContainer}>
              <View style={stylesMobile.modalContent}>
                <Text style={stylesMobile.modalTitle}>Selecione o Gênero</Text>
                <FlatList
                  data={genders}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                    <TouchableOpacity style={stylesMobile.modalItem} onPress={() => { setGenero(item); setShowGenderModal(false); }}>
                      <Text style={stylesMobile.modalText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
          </Modal>

          <Text style={{ fontSize: 11, color: 'red' }}>{espaco}</Text>

          <TouchableOpacity onPress={criar2}>
            <LinearGradient colors={['#2E8B57', '#4CD964']} style={stylesMobile.button}>
              <Text style={stylesMobile.buttonText}>Criar Conta</Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const stylesMobile = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#20613d"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30
  },
  inner: {
    alignItems: "center",
    width: "80%",
    gap: 15,
  },
  logo: {
    width: 140,
    height: 140,
    borderRadius: 80,
    backgroundColor: "#e7fbe6",
    marginBottom: 5,
    marginTop: 100,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#4CD964"
  },
  input: {
    marginTop: 20,
    width: 200,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#e3e6e3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 220,
    height: 52,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold"
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 300,
    backgroundColor: '#37C231',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff'
  },
  modalItem: {
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    color: '#fff',
  },
});
const stylesWeb = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#005631"
  },
  imageContainer: {
    flex: 1,
    backgroundColor: "#005631",
    justifyContent: "center",
    alignItems: "center",
    padding: 50
  },
  logo: {
    width: "80%",
    height: "80%",
    objectFit: "contain",
    maxWidth: 400,
    maxHeight: 400
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    backgroundColor: "#54e86d",
    borderRadius: 50
  },
  inner: {
    width: "100%",
    maxWidth: 400,
    alignItems: "center",
    gap: 20
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "#369e48",
    textAlign: "center",
  },
  input: {
    marginTop: 20,
    width: 200,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#e3e6e3',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  button: {
    width: 260,
    height: 56,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    backgroundColor: "#4CD964"
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold"
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 300,
    backgroundColor: '#37C231',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff'
  },
  modalItem: {
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    color: '#fff',
  },
});