import { Image, StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import {UserContext} from "./Context/UserContext";
import UserProvider from "./Context/UserContext";

export default function Inicio(){

    const {usuario} = useContext (UserContext);

    return(
       
        <View style={{ backgroundColor: '#282626', flex: 1 }}>
            <Text style={css.texto}>Olá Ana, bem-vinda de volta!</Text>
            <Text style={css.texto2}>Playlists em destaque</Text>
            <Image source={require("../assets/img/music.png")} style={css.img} ></Image>
            <Image source={require("../assets/img/music2.png")} style={css.img2} ></Image>
            <Text style={css.texto2}>Artistas Populares</Text>
            <Image source={require("../assets/img/artista.png") } style={css.img3}></Image>
            <Image source={require("../assets/img/artista2.png")} style={css.img4}></Image>
            <Text style={css.texto2}>Álbuns Populares</Text>
            <Text>Bem Vindo: {usuario} </Text>
        </View>

    )
}
const css = StyleSheet.create({
    geral: {
        backgroundColor:"#282626"
    },
    texto: {
      textAlign:"center",
      color:"white",
      marginBottom:20

    },
    texto2:{
        color:"white",
        marginBottom:20
    },
    img:{
        width:"45%",
        height:"30%",
        borderRadius:43,

    },
    img2:{
        width:"45%",
        height:"30%",
        borderRadius:43,
        marginLeft:"50%",
        position:'absolute',
        top:80
    },
    img3:{
        width:"50%",
        height:"30%",
        borderRadius:110
    },
    img4:{
        width:"50%",
        height:"30%",
        borderRadius:110,
        marginLeft:"50%",
        
    }
  });