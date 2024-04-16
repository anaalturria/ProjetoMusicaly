
import { useBatteryLevel } from "expo-battery";
import { useContext, useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, Switch } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { UserContext } from "./Context/UserContext";



export default function Conta ()  {

   

    const {cor, controle, setControle, toogleSwitch } = useContext (UserContext);
    
    

    return(
        <View style={{ flex: 1, backgroundColor: cor }}>
    
            <Switch 
                trackColor={{false: 'lightgray', true: 'lightgray'}}
                thumbColor={controle ? 'red' : 'black'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={ () => toogleSwitch() }
                value={controle}
            ></Switch>
            <View>
                <View style={css.caixaperfil}>
                    <View style={css.Textealinhareto}>
                        <Image style={css.fotonaperfil} 
                                source={ require("../assets/img/fotoperfil.jpeg") }></Image>
                            <View style={css.Textealinha}>
                                <Text style={{ color: controle ? 'white' : 'black',
                                    fontWeight: "bold",
                                    fontSize: 15,
                                    marginLeft: 10,
                                    marginTop: 5}}>gatinho02</Text>

                                <Text style={{ color: controle ? 'white' : 'black',
                                    fontWeight: "bold",
                                    fontSize: 15,
                                    marginLeft: 10,
                                    marginTop: 5}}>editar perfil</Text>
                            </View>
                        </View>
                    </View>
            </View>

            <View style={css.Caixonacomduascaixona}>
                <View style={css.caixona}>
                        <Text style={{color: controle ? 'white' : 'black',
        textAlign:"center",
        fontWeight: "bold",
        fontSize: 15,
        marginRight: 220,
        marginBottom: 10}}>Musicas criadas</Text>        
                    <View style={css.caixa}>
                        <View style={css.Textealinhareto}>
                            <Image style={css.fotona} 
                                source={ require("../assets/img/Album1.png") }></Image>
                            <View style={css.Textealinha}>
                                <Text style={{ color: controle ? 'white' : 'black'}}>Cinnamon Girl </Text>
                                <Text style={{ color: controle ? 'white' : 'black'}}>5:00</Text>
                            </View>
                        </View>
                    </View>
                    <View style={css.caixa}>
                        <View style={css.Textealinhareto}>
                            <Image style={css.fotona} 
                                source={ require("../assets/img/album2.jpg") }></Image>
                            <View style={css.Textealinha}>
                                <Text style={{ color: controle ? 'white' : 'black'}}>Apocalypse</Text>
                                <Text style={{ color: controle ? 'white' : 'black'}}>4:50</Text>
                            </View>
                        </View>
                    </View>
                    <View style={css.caixa}>
                        <View style={css.Textealinhareto}>
                            <Image style={css.fotona} 
                                source={ require("../assets/img/album3.jpg") }></Image>
                            <View style={css.Textealinha}>
                                <Text style={{ color: controle ? 'white' : 'black'}}>Unforgettable</Text>
                                <Text style={{ color: controle ? 'white' : 'black'}}>3:53</Text>
                            </View>
                        </View>
                    </View>
                    <View style={css.caixa}>
                        <View style={css.Textealinhareto}>
                            <Image style={css.fotona} 
                                source={ require("../assets/img/album4.webp") }></Image>
                            <View style={css.Textealinha}>
                                <Text style={{ color: controle ? 'white' : 'black'}}>Be quiet and drive</Text>
                                <Text style={{ color: controle ? 'white' : 'black'}}>3:07</Text>
                        </View>
                    </View>
                </View>
                <View style={css.caixa}>
                    <View style={css.Textealinhareto}>
                        <Image style={css.fotona} 
                                source={ require("../assets/img/album5.jpg") }></Image>
                        <View style={css.Textealinha}>
                            <Text style={{ color: controle ? 'white' : 'black'}}>Faroeste Caboclo</Text>
                            <Text style={{ color: controle ? 'white' : 'black'}}>9:03</Text>
                        </View>
                    </View>
                </View>
                <View style={css.caixa}>
                    <View style={css.Textealinhareto}>
                        <Image style={css.fotona} 
                                source={ require("../assets/img/album6.jpg") }></Image>
                        <View style={css.Textealinha}>
                            <Text style={{ color: controle ? 'white' : 'black'}}>Back in Black</Text>
                            <Text style={{ color: controle ? 'white' : 'black'}}>4:13</Text>
                        </View>
                    </View>
                </View>
                <View style={css.caixa}>
                    <View style={css.Textealinhareto}>
                        <Image style={css.fotona} 
                                source={ require("../assets/img/album7.webp") }></Image>
                        <View style={css.Textealinha}>
                            <Text style={{ color: controle ? 'white' : 'black'}}>November Rain</Text>
                            <Text style={{ color: controle ? 'white' : 'black'}}>9:17</Text>
                        </View>
                    </View>
                </View>
                <View style={css.caixa}>
                    <View style={css.Textealinhareto}>
                        <Image style={css.fotona} 
                                source={ require("../assets/img/album8.jpg") }></Image>
                        <View style={css.Textealinha}>
                            <Text style={{ color: controle ? 'white' : 'black'}}>You don't own me</Text>
                            <Text style={{ color: controle ? 'white' : 'black'}}>3:23</Text>
                        </View>
                    </View>
                </View> 
                <View style={css.Outracaixona}>
                    <Text style={{color: controle ? 'white' : 'black',
        textAlign:"center",
        fontWeight: "bold",
        fontSize: 15,
        marginLeft: 90}}>Playlists criadas</Text>  
                    <View style={css.playlistcaixa}>
                        <Image style={css.playlist}
                            source={ require("../assets/img/play1.jpg") }></Image>
                        <Image style={css.playlist} 
                            source={ require("../assets/img/play1.webp") }></Image>
                        <Image style={css.playlist} 
                            source={ require("../assets/img/play2.webp") }></Image>
                        
                    </View>
                </View>
            </View> 
            
            </View>
            
            
        </View>

    )
}
const css = StyleSheet.create({
    

     linha1:{
        flexDirection: "row", 
        marginBottom:1,
        marginHorizontal: 10

    }
    , fotona: {
        width: 33,
        height: 32,
    
    },caixa: {

        borderRadius: 5,
        justifyContent:"center", 
        marginBottom: 10,
        flexDirection: 'column',
        flexDirection: "column",
        width: 135
        
    }, Textealinha: {
        flexDirection: "column", 
        marginLeft: 10
        
    }, Textealinhareto: {
        flexDirection: "row", 
        marginLeft: 10
        
    }, caixona: {
        marginTop: 25,
        
    }, Outracaixona:{
        display: "block",
        marginLeft: 120,
        marginTop: -420,

        
    }, Caixonacomduascaixona:{
        flexDirection: "row"

    }, playlist: {
        backgroundColor: "white",
        width:138,
        height: 126,
        margin: 10

    }, playlistcaixa: {
        flexDirection: "column",
        marginLeft: 90,
        marginTop: 20

    }, fotonaperfil:{
        backgroundColor: "white",
        width: 110,
        height: 103,
        borderRadius: 100,
        marginLeft: 10

    }, caixaperfil: {
        marginBottom: 10,
        width: 300,
        marginTop: 80,
       
    }
})
