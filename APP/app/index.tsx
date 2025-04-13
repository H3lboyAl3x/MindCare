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
import Perfil from "@/components/Paciente/Perfil/Perfil";
import CriarConta01p from "@/components/IniciarCriar/Profissional/CriarConta01";
import CriarConta02p from "@/components/IniciarCriar/Profissional/CriarConta02";
import Mensagem from "@/components/Mensagem/Mensagem";
import Proficional from "@/components/Paciente/Profissionais/Profissional";
import DetalhesProfissional from "@/components/Paciente/Profissionais/DetalhesProfissional";
import ExibirInformacao from "@/components/Paciente/Perfil/ExibirInformacao";
import EditarSenha from "@/components/Paciente/Perfil/EditarSenha";
import MarcarConsulta from "@/components/Paciente/Consulta/MarcarConsulta";
import Paciente from "@/components/Proficional/Paciente/Paciente";
import DetalhesPaciente from "@/components/Proficional/Paciente/DetalhesPaciente";
import MarcarConsultap from "@/components/Proficional/Consulta/MarcarConsultap";
import ExibirInformacaop from "@/components/Proficional/Perfil/ExibirInformacao";
import EditarPerfilp from "@/components/Proficional/Perfil/EditarPerfil";
import EditarSenhap from "@/components/Proficional/Perfil/EditarSenhap";
import AnalisarConsultasp from "@/components/Proficional/Consulta/AnalisarConsultasp";
import AnalisarConsultas from "@/components/Paciente/Consulta/AnalisarConsultas";
import AdiarConsultap from "@/components/Proficional/Consulta/AdiarConsultap";
import AdiarConsulta from "@/components/Paciente/Consulta/AdiarConsulta";
import Sobre from "@/components/TelaInicio/Sobre";
import React from "react";

const Stack = createStackNavigator();

export default function HomeScreen() {
  return(
    <Stack.Navigator screenOptions={{
      headerShown: false,
      animation: "slide_from_right", // ← substitui o antigo animationEnabled
      gestureEnabled: true, // slide lateral
    }}
    initialRouteName='TelaInicio01'>
      <Stack.Screen name="TelaInicio01" component={TelaInicio01} options={{ headerShown: false }}/>
      <Stack.Screen name="TelaInicio02" component={TelaInicio02} options={{ headerShown: false }}/>
      <Stack.Screen name="Selecao" component={Selecao} options={{ headerShown: false }}/>
      <Stack.Screen name="Sobre" component={Sobre} options={{ headerShown: false }}/>
      <Stack.Screen name="IniciarSessao" component={IniciarSessao} options={{ headerShown: false }}/>
      <Stack.Screen name="CriarConta01" component={CriarConta01} options={{ headerShown: false }}/>
      <Stack.Screen name="CriarConta02" component={CriarConta02} options={{ headerShown: false }}/>
      <Stack.Screen name="CriarConta01p" component={CriarConta01p} options={{ headerShown: false }}/>
      <Stack.Screen name="CriarConta02p" component={CriarConta02p} options={{ headerShown: false }}/>
      <Stack.Screen name="Navegacao1" component={Navegacao1} options={{ headerShown: false }}/>
      <Stack.Screen name="Navegacao2" component={Navegacao2} options={{ headerShown: false }}/>
      <Stack.Screen name="EditarPerfil" component={EditarPerfil} options={{ headerShown: false }}/>
      <Stack.Screen name="EditarPerfilp" component={EditarPerfilp} options={{ headerShown: false }}/>
      <Stack.Screen name="Perfil01" component={Perfil} options={{ headerShown: false }}/>
      <Stack.Screen name="Mensagem" component={Mensagem} options={{ headerShown: false }}/>
      <Stack.Screen name="Proficional" component={Proficional} options={{ headerShown: false }}/>
      <Stack.Screen name="DetalhesProfissional" component={DetalhesProfissional} options={{ headerShown: false }}/>
      <Stack.Screen name="ExibirInformacao" component={ExibirInformacao} options={{ headerShown: false }}/>
      <Stack.Screen name="EditarSenha" component={EditarSenha} options={{ headerShown: false }}/>
      <Stack.Screen name="EditarSenhap" component={EditarSenhap} options={{ headerShown: false }}/>
      <Stack.Screen name="MarcarConsulta" component={MarcarConsulta} options={{ headerShown: false }}/>
      <Stack.Screen name="MarcarConsultap" component={MarcarConsultap} options={{ headerShown: false }}/>
      <Stack.Screen name="Paciente" component={Paciente} options={{ headerShown: false }}/>
      <Stack.Screen name="DetalhesPaciente" component={DetalhesPaciente} options={{ headerShown: false }}/>
      <Stack.Screen name="ExibirInformacaop" component={ExibirInformacaop} options={{ headerShown: false }}/>
      <Stack.Screen name="AnalisarConsultasp" component={AnalisarConsultasp} options={{ headerShown: false }}/>
      <Stack.Screen name="AnalisarConsultas" component={AnalisarConsultas} options={{ headerShown: false }}/>
      <Stack.Screen name="AdiarConsultap" component={AdiarConsultap} options={{ headerShown: false }}/>
      <Stack.Screen name="AdiarConsulta" component={AdiarConsulta} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}