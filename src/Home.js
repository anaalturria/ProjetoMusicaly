import { View, Text } from 'react-native'
import UserContext from './Context/UserContext'
import { useContext } from 'react';

export default function Home() {

    const {usuario} = useContext (UserContext);
  return (
    <View>
      <Text>Bem vinda {usuario}</Text>
    </View>
  )
}