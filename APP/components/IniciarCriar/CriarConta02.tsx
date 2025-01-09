import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, FlatList, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function CriarConta02() {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [gender, setGender] = useState('');
  const [showGenderModal, setShowGenderModal] = useState(false);

  const genders = ['Masculino', 'Feminino', 'Não incluir'];

  const minimumDate = new Date(1900, 0, 1);
  const maximumDate = new Date();
  maximumDate.setFullYear(maximumDate.getFullYear() - 10);

  const onDateChange = (_event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      if (selectedDate > maximumDate) {
        Alert.alert('Data inválida', 'Você deve ter pelo menos 10 anos de idade.');
      } else {
        setDate(selectedDate);
      }
    }
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Criar Conta</Text>
        <Text style={styles.text}>Data de Nascimento</Text>
        <TextInput style={styles.input} value={date.toLocaleDateString('pt-BR')} onFocus={() => setShowDatePicker(true)}/>
        <Text style={styles.text}>Genero</Text>
        {showDatePicker && (<DateTimePicker value={date} mode="date" display="default" minimumDate={minimumDate} maximumDate={maximumDate} onChange={onDateChange}/>)}
        <TouchableOpacity style={styles.input} onPress={() => setShowGenderModal(true)}>
            <Text style={{ color: gender ? '#000' : '#aaa' }}>
            {gender}
            </Text>
        </TouchableOpacity>
        <Modal visible={showGenderModal} transparent={true} animationType="slide" onRequestClose={() => setShowGenderModal(false)}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Selecione o Gênero</Text>
                    <FlatList data={genders} keyExtractor={(item) => item} renderItem={({ item }) => (
                        <TouchableOpacity style={styles.modalItem} onPress={() => { setGender(item); setShowGenderModal(false);}}>
                            <Text style={styles.modalText}>{item}</Text>
                        </TouchableOpacity>
                    )}/>
                </View>
            </View>
        </Modal>
      <TouchableOpacity style={styles.button}>
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
    marginTop: 50,
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
});
