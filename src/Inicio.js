import { Image, StyleSheet, Text, View } from "react-native";

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
        width: "40%"
    },
    texto: {
      textAlign:"center",
      color:"white",
      marginBottom:20,
      marginTop: 8,
      fontWeight: 'bold'

    },
    img:{
        width:"100%",
        height:"55%",
        borderRadius:43,
    }
  }); 
