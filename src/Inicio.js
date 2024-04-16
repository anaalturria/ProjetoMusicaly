import { Image, StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import {UserContext} from "./Context/UserContext";
import UserProvider from "./Context/UserContext";

export default function Inicio({img,texto}) {

    const {cor, controle, setControle, toogleSwitch } = useContext (UserContext);
    return(
        <View style={{backgroundColor: cor, flex: 1}}>
            <View style={{backgroundColor: cor,
                    padding: 7,
                    height: 300,
                    margin: 20,
                    width: "80%"}}>
                <Text style={css.texto}>{texto}</Text>
                <Image style={css.img} source={img}/>
                <Image/>
            </View>
        </View>
    )
}
const css = StyleSheet.create({
    
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
