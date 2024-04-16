import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from './Context/UserContext';


import Explorar from './Explorar';
import Conexoes from './Conexoes';
import Login from './Login';
import Conta from './Conta';
import Itens from './Itens';
import Localizacao from './Localizacao';

const Tab = createBottomTabNavigator();

export default function Rotas() {

  const { logado } = useContext(UserContext);

  if (logado == false) {
    return (<Login />)
  }
  
  return (
    <NavigationContainer>
      <Tab.Navigator  screenOptions={{ tabBarStyle: {backgroundColor: "black"}, tabBarActiveTintColor: "#282626" , headerShown: false , color:"black"}}>
        <Tab.Screen
          name="Explorar"
          component={Explorar}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="magnify" color="white" size={size} />
            ),
          }} />
        <Tab.Screen
          name="Conexões"
          component={Conexoes}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="ev-plug-type1" color="white" size={size} />
            ),
          }} />
          <Tab.Screen
          name="Conta"
          component={Conta}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color="white" size={size} />
            ),
          }} />
          <Tab.Screen
          name="Itens"
          component={Itens}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home-variant" color="white" size={size} />
            ),
          }} />
          <Tab.Screen
          name="Localizacao"
          component={Localizacao}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="airplane-marker" color="white" size={size} />
            ),
          }} />
          
          
      </Tab.Navigator>
    </NavigationContainer>
  )
}