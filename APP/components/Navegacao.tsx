import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Conversa from './Paciente/Conversa/Conversa';
import Profissionais from './Paciente/Profissionais/Profissionais';
import Perfil01 from './Paciente/Perfil/Perfil01';
import Consulta from './Paciente/Consulta/Consulta';

const Tab = createBottomTabNavigator();

export default function Navegacao() {
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
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbox-outline" size={size} color={color} />
            ),
            headerShown: false
          }}
        />
        <Tab.Screen
          name="Profissionais"
          component={Profissionais} 
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
