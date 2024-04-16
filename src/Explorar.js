import { StyleSheet, Text, View } from "react-native";
import { UserContext } from "./Context/UserContext";
import { useContext } from "react";
import { TextInput } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Explorar() {
  const {usuario} = useContext (UserContext);

  const {cor, controle, setControle, toogleSwitch } = useContext (UserContext);

    return (
      <View  style={{backgroundColor: cor, flex: 1}}>
        <View style={css.Textealinha}>
        <TextInput style={css.input}>busca</TextInput>
        <MaterialCommunityIcons name="magnify" style={{color: controle ? 'white' : 'black',
          marginRight: 80,
          fontSize: 40,
          marginLeft: 20,
          marginTop: 25}}/>
        </View>
        <Text style={{color: controle ? 'white' : 'black', textAlign:"center",
        marginTop: 230,
        fontWeight: "bold",
        fontSize: 15}}>Encontre suas musicas.</Text>
      </View>
    );
  }

  const css = StyleSheet.create({
    input: {
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
    }, Textealinha: {
          flexDirection: 'row', 
          alignItems: 'center',
    
    }
  });