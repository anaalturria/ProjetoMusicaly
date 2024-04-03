import { StyleSheet, Text, View } from "react-native";
import { UserContext } from "./Context/UserContext";
import { useContext } from "react";
import { TextInput } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Explorar() {
  const {usuario} = useContext (UserContext);

    return (
      <View style={{backgroundColor: '#282626', flex: 1}}>
        <View style={css.Textealinha}>
        <TextInput style={css.input}>busca</TextInput>
        <MaterialCommunityIcons name="magnify" style={css.icone}/>
        </View>
        <Text style={css.textoexp}>Encontre suas musicas.</Text>
      </View>
    );
  }

  const css = StyleSheet.create({
    textoexp: {
        color: 'white',
        textAlign:"center",
        marginTop: 230,
        fontWeight: "bold",
        fontSize: 15
    },  input: {
          width: "75%", 
          height: 55,
          borderWidth: 1,
          borderRadius: 5,
          borderColor: 'white',
          padding: 15,
          marginTop: 50,
          marginBottom: 15,
          marginLeft: 15,
          backgroundColor: "#4B4B4B",
          color: "#868686",
          borderColor: "#4B4B4B"
    }, icone: {
          color: 'white',
          marginRight: 80,
          fontSize: 40,
          marginLeft: 20,
          marginTop: 25
    }, Textealinha: {
          flexDirection: 'row', 
          alignItems: 'center',
    
    }
  });