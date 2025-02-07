import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator  } from "@react-navigation/stack";
import TelaInicio01 from "@/components/TelaInicio/TelaInicio01";
import TelaInicio02 from "@/components/TelaInicio/TelaInicio02";
import Selecao from "@/components/IniciarCriar/Selecao";
import IniciarSessao from "@/components/IniciarCriar/IniciarSessao";
import CriarConta01 from "@/components/IniciarCriar/CriarConta01";
import CriarConta02 from "@/components/IniciarCriar/CriarConta02";
import Navegacao from "@/components/Navegacao";
import EditarPerfil from "@/components/Paciente/Perfil/EditarPerfil";
import Perfil01 from "@/components/Paciente/Perfil/Perfil01";
import React from "react";

const Stack = createStackNavigator();

export default function HomeScreen() {
  return(
    <Stack.Navigator initialRouteName='TelaInicio01'>
      <Stack.Screen name="TelaInicio01" component={TelaInicio01} options={{ headerShown: false }}/>
      <Stack.Screen name="TelaInicio02" component={TelaInicio02} options={{ headerShown: false }}/>
      <Stack.Screen name="Selecao" component={Selecao} options={{ headerShown: false }}/>
      <Stack.Screen name="IniciarSessao" component={IniciarSessao} options={{ headerShown: false }}/>
      <Stack.Screen name="CriarConta01" component={CriarConta01} options={{ headerShown: false }}/>
      <Stack.Screen name="CriarConta02" component={CriarConta02} options={{ headerShown: false }}/>
      <Stack.Screen name="Navegacao" component={Navegacao} options={{ headerShown: false }}/>
      <Stack.Screen name="EditarPerfil" component={EditarPerfil} options={{ headerShown: false }}/>
      <Stack.Screen name="Perfil01" component={Perfil01} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}