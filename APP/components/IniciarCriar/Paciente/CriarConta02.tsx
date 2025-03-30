import React, { useState , useEffect} from 'react';
import axios from "axios";
import { View, Text, TouchableOpacity, StyleSheet, Modal, FlatList, Alert, Platform } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { getUrl } from '@/app/utils/url';

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

      navigation.navigate("Navegacao1", {id: userId, idp: idpac, nome, telefone, email, password, datanascimento: formattedDate, genero});
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

      <TouchableOpacity style={styles.input} onPress={() => setShowDatePicker(true)}>
        <Text style={{ color: datanascimento ? '#fff' : '#aaa' }}>
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

      <TouchableOpacity style={styles.input} onPress={() => setShowGenderModal(true)}>
        <Text style={{ color: genero ? '#fff' : '#aaa' }}>
          {genero || 'Gênero'}
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

      <Text style={{fontSize: 11, color: 'red'}}>{espaco}</Text>

      <TouchableOpacity style={styles.button} onPress={criar2}>
        <Text style={styles.buttonText}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37C231',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
  input: {
    marginTop: 20,
    color:'white',
    width: '80%',
    height: 50,
    borderRadius: 50,
    backgroundColor: '#2a8c26',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#7EBF42',
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
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});