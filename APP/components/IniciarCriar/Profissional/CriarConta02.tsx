import React, { useState , useEffect} from 'react';
import axios from "axios";
import { View, Text, TouchableOpacity, StyleSheet, Modal, FlatList, Alert, Platform } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { getUrl } from '@/app/utils/url';
import { TopWaves } from '@/app/TopWaves';

export default function CriarConta02p({ route, navigation }) {
  const { nome, telefone, email, password} = route.params;
  const [id, setid] = useState(null);
  const [idp, setidp] = useState(null);

  const [idat, setidat] = useState(null);
  const [idap, setidap] = useState(null);
  const [genero, setGenero] = useState('');
  const [expe, setexperiencia] = useState('');
  const [espe, settrabalho] = useState('');

  const [datanascimento, setDatan] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showGenderModal, setShowGenderModal] = useState(false);
  const [showexperiencia, setshowexperiencia] = useState(false);
  const [showtrabalho, setshowtrabalho] = useState(false);
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

      const response1 = await axios.post(`${getUrl()}/MindCare/API/profissionais`, {
        tempoexperiencia: expe,
        iduser: userId
      });
      const Profissional = response1.data;
      const idpac = Profissional.id;
      setidp(idpac);

      const response2 = await axios.post(`${getUrl()}/MindCare/API/areatrabalho`, {
        area: espe
      });
      const AreaTrabalho = response2.data;
      const idAT = AreaTrabalho.id;
      setidat(idAT);

      const response3 = await axios.post(`${getUrl()}/MindCare/API/areaprof`, {
        idarea: AreaTrabalho.id,
        idpro: Profissional.id
      });
      const AreaProf = response2.data;
      const idAP = AreaProf.id;
      setidap(idAP);



      navigation.navigate("Navegacao2", {id: userId, idp: idpac, idat: idAT, idap: idAP, nome: Usuario.nome, telefone: Usuario.telefone, email: Usuario.email, password: Usuario.password, datanascimento: formattedDate, genero: Usuario.genero, espe: AreaTrabalho.area, expe: Profissional.tempoexperiencia});
    } catch (error) {
      Alert.alert("Erro ao cadastrar", "Tente novamente mais tarde.");
    }
  };
  

  const genders = ['Masculino', 'Feminino', 'Não incluir'];
  const experent = ['1', '2', '3', '4', '5'];
  const work = ['Psicologia clínica', 'Psicologia Educacional', 'Terapeuta holístico', 'Terapeuta de Renascimento'];

  const minimumDate = new Date(1900, 0, 1);
  const maximumDate = new Date();
  maximumDate.setFullYear(maximumDate.getFullYear() - 18);

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
      <TopWaves />
      <View style={styles.Menu}>
      <Text style={styles.title}>Criar Conta</Text>
      <TouchableOpacity style={styles.input} onPress={() => setShowDatePicker(true)}>
        <Text style={{ color: datanascimento ? '#4CD964' : '#6fcf87' }}>
          {datanascimento ? datanascimento.toLocaleDateString('pt-BR') : 'Data de Nascimento'}
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

      <TouchableOpacity style={styles.input} onPress={() => setshowexperiencia(true)}>
        <Text style={{ color: expe ? '#4CD964' : '#6fcf87' }}>
          {expe || 'Anos de experiencia'}
        </Text>
      </TouchableOpacity>

      <Modal visible={showexperiencia} transparent={true} animationType="slide" onRequestClose={() => setshowexperiencia(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Selecione a experiencia-ano</Text>
            <FlatList
              data={experent}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.modalItem} onPress={() => { setexperiencia(item); setshowexperiencia(false); }}>
                  <Text style={[styles.modalText, {width: 50, textAlign: 'center'}]}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>

      <TouchableOpacity style={styles.input} onPress={() => setshowtrabalho(true)}>
        <Text style={{ color: espe ? '#4CD964' : '#6fcf87' }}>
          {espe || 'Area de trabalho'}
        </Text>
      </TouchableOpacity>

      <Modal visible={showtrabalho} transparent={true} animationType="slide" onRequestClose={() => setshowtrabalho(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Selecione a sua Area de Trabalho</Text>
            <FlatList
              data={work}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.modalItem} onPress={() => { settrabalho(item); setshowtrabalho(false); }}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: -35,
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
  input: {
    marginTop: 20,
    color:'4CD964',
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
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});