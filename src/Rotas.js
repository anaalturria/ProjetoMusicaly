import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from './Context/UserContext';


import Explorar from './Explorar';
import Conexoes from './Conexoes';
import Login from './Login';
import Conta from './Conta';
import Inicio from './Inicio';

const Tab = createBottomTabNavigator();

export default function Rotas() {

  const { logado } = useContext(UserContext);

  if (logado == false) {
    return (<Login />)
  }
  
  return (
    <NavigationContainer>
      <Tab.Navigator  screenOptions={{ tabBarActiveTintColor: "#282626" , headerShown: false}}>
        <Tab.Screen
          name="Explorar"
          component={Explorar}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="magnify" color={color} size={size} />
            ),
          }} />
        <Tab.Screen
          name="Conexões"
          component={Conexoes}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="atom-variant" color={color} size={size} />
            ),
          }} />
          <Tab.Screen
          name="Conta"
          component={Conta}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="atom-variant" color={color} size={size} />
            ),
          }} />
          <Tab.Screen
          name="Inicio"
          component={Inicio}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="atom-variant" color={color} size={size} />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}