import Inicio from "./Inicio";
import { useContext } from "react";
import { UserContext } from "./Context/UserContext";
import { FlatList, StyleSheet, View, Text} from "react-native";

const dados = [
    {
        id:"01",
        texto:"Playlists em destaque",
        img: require("../assets/img/music.png"),
        
    },
    {
        id: "02",
        img: require("../assets/img/music2.png")
    },
    
    {
        id:"03",
        texto:"Artistas Populares",
        img: require("../assets/img/artista.png"),
        
    },
    {
        id:"04",
        img: require("../assets/img/artista2.png")
    },
    {
        id:"05",
        texto:"Álbuns Populares",
        img: require("../assets/img/album.png"),
    },
    {
        id:"06",
        img: require("../assets/img/album2.png"),
    },
    
]

export default function Itens({navigation})
{


    return(
        <>
        <View style={css.geral}>
        
        <FlatList 
        data={dados} 
        renderItem={ ({item}) => 
        <Inicio
        img={item.img} 
        texto={item.texto} 
        />
        
        } 
        keyExtractor={item => item.id}
        contentContainerStyle={css.container}
        horizontal={false}
        numColumns={2}
        />
        
    </View>
    </>
    )

}

const css = StyleSheet.create({
   
    container: {
        backgroundColor: "black",
        width: "100%",  
    }
  }); 