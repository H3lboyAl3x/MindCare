import { getUrl } from "@/app/utils/url";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import axios from "axios";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert, Platform } from "react-native";

type Consulta = {
  id: number;
  data: string;
  hora: string;
  idpaci: number;
  idpro: number;
  status: string;
};

export default function MarcarConsultap({ navigation, route }) {
    const { idpaci, idpro } = route.params;

    const [datamarcacao, setDatan] = useState<Date | null>(null);
    const [tempomarcacao, settempo] = useState<Date | null>(null);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);

    const pegarData = () => {
        const agora = new Date();
        agora.setHours(0, 0, 0, 0); // Remove horas para evitar problemas de fuso horário
        return agora;
    };
    
    const Marcar = async () => {
        if (!datamarcacao || !tempomarcacao) {
            Alert.alert("Por favor, selecione a data e a hora antes de marcar a consulta.");
            return;
        }

        const formatarHora = (date: Date) => {
          const horas = date.getHours().toString().padStart(2, '0');
          const minutos = date.getMinutes().toString().padStart(2, '0');
          return `${horas}:${minutos}`;
        };

        const formattedDate = datamarcacao.toISOString().split("T")[0];
        const formattedTime = formatarHora(tempomarcacao);

        try {
          const analisar = await axios.get<Consulta[]>(`${getUrl()}/MindCare/API/consultas`);
          const consultasseparada = analisar.data;
          const consultasfiltrada = consultasseparada.filter((consulta) => 
            consulta.idpro === idpro &&
            consulta.status === "Pendente" &&
            consulta.data.split("T")[0] === formattedDate &&
            consulta.hora.slice(0, 5) === formattedTime
          );
          
          

          if (!consultasfiltrada[0])
          {

            const response = await axios.post(`${getUrl()}/MindCare/API/consultas`, {
              data: formattedDate,
              hora: formattedTime,
              idpaci: idpaci,
              idpro: idpro,
              status: "Pendente",
            });
            navigation.goBack();
          }else{
            Alert.alert("Ja tem consulta marcada para esta data e horario!");
          }
        } catch (error) {
            console.error("Erro ao marcar consulta:", error);
        }
    };
  const minimumDate = pegarData();
  const onDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (selectedDate) {
      setDatan(selectedDate);
    }
    setShowDatePicker(false);
  };
  const onTimeChange = (event: DateTimePickerEvent, selectedTime?: Date) => {
    if (selectedTime) {
      settempo(selectedTime);
    }
    setShowTimePicker(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Marcar Consulta</Text>

      {/* Botão para selecionar DATA */}
      <TouchableOpacity style={styles.input} onPress={() => setShowDatePicker(true)}>
        <Text style={{ color: datamarcacao ? "#fff" : "#aaa" }}>
          {datamarcacao ? datamarcacao.toLocaleDateString("pt-BR") : "Selecionar Data"}
        </Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={datamarcacao || new Date()}
          mode="date"
          display="spinner"
          minimumDate={minimumDate}
          onChange={onDateChange}
        />
      )}

      {/* Botão para selecionar HORA */}
      <TouchableOpacity style={styles.input} onPress={() => setShowTimePicker(true)}>
        <Text style={{ color: tempomarcacao ? "#fff" : "#aaa" }}>
          {tempomarcacao ? tempomarcacao.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }) : "Selecionar Hora"}
        </Text>
      </TouchableOpacity>

      {showTimePicker && (
        <DateTimePicker
          value={tempomarcacao || new Date()}
          mode="time"
          display="spinner"
          onChange={onTimeChange}
        />
      )}
      <TouchableOpacity style={styles.button} onPress={Marcar}>
        <Text style={styles.buttonText}>Marcar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#37C231",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
  input: {
    marginTop: 20,
    width: "80%",
    height: 50,
    borderRadius: 50,
    backgroundColor: "#2a8c26",
    justifyContent: "center",
    alignItems: "center",
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
});