import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Conversa from './Conversa/Conversa';
import Profissionais from './Profissionais/Profissionais';
import Perfil from './Perfil/Perfil';
import Consulta from './Consulta/Consulta';

const Tab = createBottomTabNavigator();

export default function Navegacao1({route}) {
  const {id, idp, nome, telefone, email, password, datanascimento, genero} = route.params;

return (
    <Tab.Navigator 
      screenOptions={{
        tabBarActiveTintColor: '#1a5917',
        tabBarInactiveTintColor: '#fff',
        tabBarStyle: {
        backgroundColor: '#37C231',
        width: '95%',
        height: 60,
        alignSelf: 'center',
        marginBottom: 5,
        borderRadius: 50,
        shadowRadius: 10,
        shadowColor: 'black',
        },
      }}>
        <Tab.Screen
          name="Conversas"
          component={Conversa}
          initialParams={{id: id, idp: idp}}
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
          initialParams={{idp: idp, idu: id}}
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
          component={Perfil} 
          initialParams={{id: id, idp: idp, nome: nome, telefone: telefone, email: email, password: password, datanascimento: datanascimento, genero: genero}}
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