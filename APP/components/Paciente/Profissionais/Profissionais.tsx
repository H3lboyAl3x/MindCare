import React from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity } from "react-native";

export default function Profissionais() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Profissionais</Text>
      <Text style={styles.especialidades}>Especialidades</Text>
      <ScrollView horizontal style={styles.scrowespecialidades}>
        <TouchableOpacity style={styles.botaoespecialidade}>
         <View style={styles.circuloespe} />
          <Text style={styles.textoespecialidade}>Psicologia Educacional</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoespecialidade}>
         <View style={styles.circuloespe} />
          <Text style={styles.textoespecialidade}>Psicologia Educacional</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoespecialidade}>
         <View style={styles.circuloespe} />
          <Text style={styles.textoespecialidade}>Psicologia Educacional</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoespecialidade}>
         <View style={styles.circuloespe} />
          <Text style={styles.textoespecialidade}>Psicologia Educacional</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.viewPro}>
        <Text style={styles.Textpro}>Profissionais que ja o acompanham</Text>
         <ScrollView>

         </ScrollView>

        <Text style={styles.Textpro}>Outros Profissionais</Text>
        <ScrollView>
          
        </ScrollView>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titulo: {
      fontSize: 30,
      fontWeight: 'bold',
      marginLeft: 5,
  },
  especialidades: {
    textAlign: 'center',
    fontSize: 15,
    color: '#c0c0c0'
  },
  scrowespecialidades: {
    paddingTop: 10,
    flexDirection: 'row',
    width: '100%',
    height: 100,
  },
  botaoespecialidade: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  circuloespe: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ccc',
    marginBottom: 5,
  },
  textoespecialidade: {
    fontSize: 12,
    textAlign: 'center',
  },

  viewPro: {
    height: '80%'
  },
  Textpro: {
    fontSize: 13,
    color: 'white',
    backgroundColor: '#34C759',
  },

});
