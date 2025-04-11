import { TopWaves } from "@/app/TopWaves";
import { getUrl } from "@/app/utils/url";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import axios from "axios";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert, Platform, Modal, FlatList, TextInput,  } from "react-native";


export default function EditarPerfil({navigation,route}){
    const {ide, idpe, nomee, telefonee, emaile, passworde, datanascimentoe, generoe} = route.params;
    const [Nome, setnome] = useState(nomee);
    const [Telefone, settelefone] = useState(telefonee);
    const [Email, setemail] = useState(emaile);


  const [datanascimento, setDatan] = useState<Date | null>(datanascimentoe ? new Date(datanascimentoe) : null);
  const [genero, setGenero] = useState(generoe);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showGenderModal, setShowGenderModal] = useState(false);

  const Editar = async () => {
    if (!datanascimento) {
      return;
    }
    const formattedDate = datanascimento.toISOString().split('T')[0];
    try {
        const response = await axios.put(`${getUrl()}/MindCare/API/users/${ide}`, {
            nome: Nome.trim() || nomee,
            email: Email.trim() || emaile,
            telefone: Telefone.trim() || telefonee,
            datanascimento: formattedDate,
            passworde: passworde,
            genero: genero,
        });
        const user = response.data
        navigation.navigate("Navegacao1", { 
                id: user.id, 
                idp: idpe, 
                nome: user.nome, 
                telefone: user.telefone, 
                email: user.email, 
                password: user.password, 
                datanascimento: formattedDate, 
                genero: user.genero 
        });

    } catch (error) {
      console.error("Erro ao Editar", "Tente novamente mais tarde. "+error);
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
      <TopWaves/>
        <View style={styles.Menu}>
        <Text style={styles.title}>Ediar Perfil</Text>
        <TextInput style={styles.textbox} value={Nome} onChangeText={setnome} placeholder={nomee} />
        <TextInput style={styles.textbox} keyboardType="phone-pad" value={Telefone} onChangeText={settelefone} placeholder={telefonee} />
        <TextInput style={styles.textbox} keyboardType="email-address" value={Email} onChangeText={setemail} placeholder={emaile} />
        <TouchableOpacity style={styles.input} onPress={() => {navigation.navigate('EditarSenha', {
                    id: ide,
                    idp: idpe,
                    nome: nomee,
                    telefone: telefonee,
                    email: emaile,
                    password: passworde,
                    datanascimento: datanascimentoe,
                    genero: generoe
                })}}>
            <Text style={{color: '#4CD964'}}>Alterar minha Senha</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.input} onPress={() => setShowDatePicker(true)}>
            <Text style={{ color: datanascimento instanceof Date ? '#4CD964' : '#6fcf87' }}>
                {datanascimento instanceof Date ? datanascimento.toLocaleDateString('pt-BR') : datanascimentoe}
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
        <Text style={{ color: genero ? '#4CD964' : '#6fcf87' }}>
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
      <TouchableOpacity style={styles.button} onPress={Editar}>
        <Text style={styles.buttonText}>Editar</Text>
      </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: -20,
  },
  Menu: {
    width: '100%',
    height: '80%',
    alignItems: "center",
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: "#4CD964",
    textAlign: "center",
  },
  textbox: {
    marginTop: 20,
    color:'#4CD964',
    width: '80%',
    height: 50,
    borderRadius: 50,
    backgroundColor: '#e3e6e3',
    textAlign: 'center'
  },
  input: {
    marginTop: 20,
    width: '80%',
    height: 50,
    borderRadius: 50,
    backgroundColor: '#e3e6e3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#4CD964',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    alignSelf: 'center',
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