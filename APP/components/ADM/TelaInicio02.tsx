import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import { getUrl } from '@/app/utils/url';

const image1Url = "https://img.freepik.com/vetores-premium/trevo-com-quatro-folhas-isoladas-no-fundo-branco-conceito-da-sorte-no-estilo-cartoon-realista_302536-46.jpg";
const image2Url = "https://aebo.pt/wp-content/uploads/2024/05/spo-300x300.png";

export default function TelaInicio02({ navigation, route }) {
 const {id, email, password} = route.params;


  if (Platform.OS === 'web') {
      return (
        <ScrollView style={stylesweb.container}>
          {/* Cabeçalho */}
          <View style={stylesweb.header}>
            <Image source={{ uri: image1Url }} style={stylesweb.mainImage} />
            <Text style={stylesweb.title}>Espaço Gaya</Text>
            <TouchableOpacity style={{ marginLeft: 850 }} onPress={() => navigation.navigate('Selecao')}>
              <LinearGradient colors={['#2E8B57', '#4CD964']} style={[stylesweb.button]}>
                <Text style={stylesweb.buttonText}>Registrar</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={stylesweb.menu}>

          </View>
        </ScrollView>
      );
    }
  }
  
  const stylesweb = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f4f4f4",
      paddingTop: 20,
    },
    header: {
      alignItems: "center",
      flexDirection: 'row',
      paddingHorizontal: 20,
      backgroundColor: '#20613d',
      position: 'absolute',
      top: -20,
      width: '100%',
      height: 60,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#4CD964",
      textAlign: "center",
      marginLeft: 10,
    },
    mainImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    button: {
      backgroundColor: "#4CD964",
      borderRadius: 5,
      alignSelf: "center",
      height: 40,
      width: 200,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 5,
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
    menu: {
      flexDirection: 'row',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
    },
  });