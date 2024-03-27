import { StyleSheet, Text, View } from "react-native";
import { UserContext } from "./Context/UserContext";
import { useContext } from "react";


export default function Explorar() {
  const {usuario} = useContext (UserContext);

    return (
      <View style={{backgroundColor: '#282626', flex: 1}}>
        <Text>Bem vinda {usuario}</Text>
        <Text style={css.textoexp}>Encontre suas musicas.</Text>
      </View>
    );
  }

  const css = StyleSheet.create({
    textoexp: {
        color: 'white',
        
    },
  });