import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Conversa from './Conversa/Conversa';
import Perfil01 from './Perfil/Perfil01';
import Consulta from './Consulta/Consulta';
import Paciente from './Paciente/Pacientes';

const Tab = createBottomTabNavigator();

export default function Navegacao2({route}) {
  const {id, idp, nome, telefone, email, password, datanascimento, genero, espe, expe} = route.params;
return (
    <Tab.Navigator 
      screenOptions={{
        tabBarActiveTintColor: '#009951',
        tabBarInactiveTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#34C759',
        },
      }}>
        <Tab.Screen
          name="Conversas"
          component={Conversa}
          initialParams={{id, idp}}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbox-outline" size={size} color={color} />
            ),
            headerShown: false
          }}
        />
        <Tab.Screen
          name="Pacientes"
          component={Paciente} 
          initialParams={{idp, id}}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="people-outline" size={size} color={color} />
            ),
            headerShown: false
          }}
        />
        <Tab.Screen
          name="Consulta"
          component={Consulta} 
          initialParams={{idp}}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="videocam-outline" size={size} color={color} />
            ),
            headerShown: false
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={Perfil01}
          initialParams={{id, idp, nome, telefone, email, password, datanascimento, genero, espe, expe}}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-circle-outline" size={size} color={color} />
            ),
            headerShown: false
          }}
        />
      </Tab.Navigator>
  );
}
