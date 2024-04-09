import { Image, StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import {UserContext} from "./Context/UserContext";
import UserProvider from "./Context/UserContext";

export default function Inicio({img,texto}) {
    return(
        <View style={css.geral}>
            <Text style={css.texto}>{texto}</Text>
            <Image style={css.img} source={img}/>
            <Image/>
        </View>
    )
}
const css = StyleSheet.create({
    geral: {
        backgroundColor:"black",
        padding: 7,
        height: 300,
        margin: 20,
        width: "40%", 
        
    },
    texto: {
      textAlign:"center",
      color:"white",
      marginBottom:20,
      marginTop: 10,
      fontWeight: 'bold'

    },
    img:{
        width:"100%",
        height:"55%",
        borderRadius:43,
    }
  }); 
