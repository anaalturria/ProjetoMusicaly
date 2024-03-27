import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from './Context/UserContext';


import Explorar from './Explorar';
import Conexoes from './Conexoes';
import Login from './Login';


const Tab = createBottomTabNavigator();

export default function Rotas() {

  const { logado } = useContext(UserContext);

  if (logado == false) {
    return (<Login />)
  }
  
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Explorar">
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
      </Tab.Navigator>
    </NavigationContainer>
  )
}