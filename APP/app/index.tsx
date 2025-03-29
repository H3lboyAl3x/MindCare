import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator  } from "@react-navigation/stack";
import TelaInicio01 from "@/components/TelaInicio/TelaInicio01";
import TelaInicio02 from "@/components/TelaInicio/TelaInicio02";
import Selecao from "@/components/IniciarCriar/Selecao";
import IniciarSessao from "@/components/IniciarCriar/IniciarSessao";
import CriarConta01 from "@/components/IniciarCriar/Paciente/CriarConta01";
import CriarConta02 from "@/components/IniciarCriar/Paciente/CriarConta02";
import Navegacao1 from "@/components/Paciente/Navegacao1";
import Navegacao2 from "@/components/Proficional/Navegacao2";
import EditarPerfil from "@/components/Paciente/Perfil/EditarPerfil";
import Perfil01 from "@/components/Paciente/Perfil/Perfil01";
import CriarConta01p from "@/components/IniciarCriar/Profissional/CriarConta01";
import CriarConta02p from "@/components/IniciarCriar/Profissional/CriarConta02";
import Mensagem from "@/components/Mensagem/Mensagem";
import Proficional from "@/components/Paciente/Profissionais/Profissional";
import DetalhesProfissional from "@/components/Paciente/Profissionais/DetalhesProfissional";
import React from "react";
import * as FileSystem from "expo-file-system";

const Stack = createStackNavigator();

export default function HomeScreen() {
  console.log("Expo Document Directory:", FileSystem.documentDirectory);
  return(
    <Stack.Navigator initialRouteName='TelaInicio01'>
      <Stack.Screen name="TelaInicio01" component={TelaInicio01} options={{ headerShown: false }}/>
      <Stack.Screen name="TelaInicio02" component={TelaInicio02} options={{ headerShown: false }}/>
      <Stack.Screen name="Selecao" component={Selecao} options={{ headerShown: false }}/>
      <Stack.Screen name="IniciarSessao" component={IniciarSessao} options={{ headerShown: false }}/>
      <Stack.Screen name="CriarConta01" component={CriarConta01} options={{ headerShown: false }}/>
      <Stack.Screen name="CriarConta02" component={CriarConta02} options={{ headerShown: false }}/>
      <Stack.Screen name="CriarConta01p" component={CriarConta01p} options={{ headerShown: false }}/>
      <Stack.Screen name="CriarConta02p" component={CriarConta02p} options={{ headerShown: false }}/>
      <Stack.Screen name="Navegacao1" component={Navegacao1} options={{ headerShown: false }}/>
      <Stack.Screen name="Navegacao2" component={Navegacao2} options={{ headerShown: false }}/>
      <Stack.Screen name="EditarPerfil" component={EditarPerfil} options={{ headerShown: false }}/>
      <Stack.Screen name="Perfil01" component={Perfil01} options={{ headerShown: false }}/>
      <Stack.Screen name="Mensagem" component={Mensagem} options={{ headerShown: false }}/>
      <Stack.Screen name="Proficional" component={Proficional} options={{ headerShown: false }}/>
      <Stack.Screen name="DetalhesProfissional" component={DetalhesProfissional} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}