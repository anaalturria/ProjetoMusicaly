import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useContext, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from './Context/UserContext';

export default function Login() {

    const[ email, setEmail ] = useState("");
    const[ senha, setSenha ] = useState("");
    const[ erro, setErro ] = useState(false);

    const { Login } = useContext( UserContext );

    async function realizaLogin() {
        Login( email, senha )
    }

  return (
    <View style={styles.container}>
      <TextInput placeholder='email' style={styles.input}
                 value={email} 
                 onChangeText={ (digitado) => setEmail(digitado)}></TextInput>
      <TextInput placeholder='senha' style={styles.input}
                value={senha} 
                 onChangeText={ (digitado) => setSenha(digitado)}></TextInput>
      <TouchableOpacity style={styles.btn} onPress={realizaLogin}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#282626',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      width: "90%", 
      height: 60,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: 'white',
      padding: 15,
      marginTop: 20,
      marginBottom: 15,
    },
    btn: {
      backgroundColor: "white",
      color:"black",
      width: "90%",
      height: 60,
      borderRadius: 5
    },
    btnText: {
      color: "white",
      textAlign: "center",
      lineHeight: 60,
      fontSize: 25, 
      fontWeight: "bold"

  } 
} );
  