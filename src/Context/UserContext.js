import { createContext, useEffect, useState } from "react";
import { View, Text, Switch } from 'react-native'
import React from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [logado, setLogado] = useState(false);
  const [cor, setCor ] = useState("white");
  const [controle, setControle] = useState(false);
 

  function toogleSwitch(){
    setControle( !controle );
    setCor( controle ? "white" : "black" );
  }

  async function Login(email, senha) {
    if (email == "ana@gmail.com" && senha == "1234") {
      await AsyncStorage.setItem( "usuario" , "Ana");
      setLogado(true);
    }
  }

  async function infoUsuario() {
    const usuario = await AsyncStorage.getItem("usuario");
    if (usuario) {
      setUsuario(usuario);
      setLogado(true);
    }
  };

  useEffect(() => {
    infoUsuario()
  }, [])
  
  return (
    <>
      <UserContext.Provider value={{ usuario: usuario, logado: logado, Login, infoUsuario, cor: cor, controle: controle, setControle, toogleSwitch }}>
        {children}
      </UserContext.Provider>
      
    </>
  )
}

export default UserProvider;