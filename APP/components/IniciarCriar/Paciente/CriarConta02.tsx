import React, { useState } from 'react';
import axios from "axios";
import { View, Text, TouchableOpacity, StyleSheet, Modal, FlatList, Alert, Platform } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

export default function CriarConta02({ route, navigation }) {
  const { nome, telefone, email, password } = route.params;

  const [datanascimento, setDatan] = useState<Date | null>(null);
  const [genero, setGenero] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showGenderModal, setShowGenderModal] = useState(false);
  const [espaco, setEspaco] = useState("");

  const criar2 = async () => {
    if (!datanascimento || !genero) {
      setEspaco("Preencha todos os campos antes de continuar.");
      return;
    }
  
    // Formata a data para YYYY-MM-DD antes de enviar
    const formattedDate = datanascimento.toISOString().split('T')[0];
  
    try {
      await axios.post("http://192.168.1.219:3000/MindCare/API/users", {
        nome,
        telefone,
        email,
        password,
        datanascimento: formattedDate, // Usa a data formatada
        genero
      });
      navigation.navigate("Navegacao", { nome, telefone, email, password, datanascimento: formattedDate, genero });
    } catch (error) {
      Alert.alert("Erro ao cadastrar", "Tente novamente mais tarde.");
    }
  };
  

  const genders = ['Masculino', 'Feminino', 'Não incluir'];
  const minimumDate = new Date(1900, 0, 1);
  const maximumDate = new Date();
  maximumDate.setFullYear(maximumDate.getFullYear() - 10);

  const onDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (event.type === 'set' && selectedDate) {
      if (selectedDate > maximumDate) {
        Alert.alert('Data inválida', 'Você deve ter pelo menos 10 anos de idade.');
      } else {
        setDatan(selectedDate);
      }
    }
    setShowDatePicker(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>

      {/* Data de Nascimento */}
      <Text style={styles.text}>Data de Nascimento</Text>
      <TouchableOpacity style={styles.input} onPress={() => setShowDatePicker(true)}>
        <Text style={{ color: datanascimento ? '#000' : '#aaa' }}>
          {datanascimento ? datanascimento.toLocaleDateString('pt-BR') : 'Selecione a data'}
        </Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={datanascimento || new Date()}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          minimumDate={minimumDate}
          maximumDate={maximumDate}
          onChange={onDateChange}
        />
      )}

      {/* Gênero */}
      <Text style={styles.text}>Gênero</Text>
      <TouchableOpacity style={styles.input} onPress={() => setShowGenderModal(true)}>
        <Text style={{ color: genero ? '#000' : '#aaa' }}>
          {genero || 'Selecione o gênero'}
        </Text>
      </TouchableOpacity>

      <Modal visible={showGenderModal} transparent={true} animationType="slide" onRequestClose={() => setShowGenderModal(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Selecione o Gênero</Text>
            <FlatList
              data={genders}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.modalItem} onPress={() => { setGenero(item); setShowGenderModal(false); }}>
                  <Text style={styles.modalText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>

      {/* Mensagem de erro */}
      {espaco ? <Text style={styles.errorText}>{espaco}</Text> : null}

      {/* Botão Criar Conta */}
      <TouchableOpacity style={styles.button} onPress={criar2}>
        <Text style={styles.buttonText}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 100,
  },
  text: {
    marginTop: 30,
    color: '#D2D2D2',
    fontSize: 15,
  },
  input: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#14AE5C',
    width: 200,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalItem: {
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});