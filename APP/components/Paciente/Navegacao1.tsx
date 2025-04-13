import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Conversa from './Conversa/Conversa';
import Profissionais from './Profissionais/Profissionais';
import Perfil from './Perfil/Perfil';
import Consulta from './Consulta/Consulta';
import { LinearGradient } from 'expo-linear-gradient';

const Tab = createBottomTabNavigator();

export default function Navegacao1({ route }) {
  const { id, idp, nome, telefone, email, password, datanascimento, genero } = route.params;
  const isWeb = Platform.OS === 'web';
  
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#e0e0e0',
        tabBarStyle: {
          position: 'absolute',
          top: isWeb ? 0 : undefined,
          bottom: isWeb ? undefined : 0,
          height: 60,
          width: isWeb ? '100%' : '100%',
          alignSelf: isWeb ? 'stretch' : 'center',
          borderTopWidth: 0,
          elevation: 0,
          overflow: 'hidden',
        },             
        tabBarBackground: () => (
          <LinearGradient
            colors={['#2E8B57', '#4CD964']}
            style={{ flex: 1 }}
          />
        ),
      }}
    >
      <Tab.Screen
        name="Conversas"
        component={Conversa}
        initialParams={{ id: id, idp: idp }}
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
        initialParams={{ idp: idp, idu: id, nomeu: nome, telefoneu: telefone, emailu: email, passwordu: password, datanascimentou: datanascimento, generou: genero  }}
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
        initialParams={{ idp }}
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
        initialParams={{ id, idp, nome, telefone, email, password, datanascimento, genero }}
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