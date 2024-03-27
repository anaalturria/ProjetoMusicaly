import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Inicio from './Inicio';
import Conta from './Conta';
import UserProvider from './Context/UserContext';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <UserProvider>
      <NavigationContainer >
    <Tab.Navigator >
      <Tab.Screen options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} name="Inicio" component={Inicio} />
      <Tab.Screen  options={{
          tabBarLabel: 'Conta',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-heart" color={color} size={size} />
          ),
        }} 
      
      name="Conta" component={Conta} />
    </Tab.Navigator>
  </NavigationContainer>
    </UserProvider>
    
  );
}

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282626',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
