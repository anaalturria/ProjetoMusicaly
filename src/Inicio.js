import { Image, StyleSheet, Switch, Text, View } from "react-native";
import { useBatteryLevel } from "expo-battery";
import { useEffect, useState } from "react";
import * as Network from "expo-network";


export default function Inicio({ img, texto }) {


    const [bateria, setBateria] = useState();
    const batteryLevel = useBatteryLevel();
    const [rede, setRede] = useState(false);

    async function getStatus()
    {
        const status = await Network.getNetworkStateAsync();
        if( status.type == "WIFI"){
            setRede(true)
        }
    }

    useEffect(() => {
        setBateria((batteryLevel * 100).toFixed(0))
    }, [batteryLevel]);


    return (
        <>
            {bateria > 20 ?
                <>
                    <View style={css.geral}>
                        <View>
                            <Text style={css.texto}>{texto}</Text>
                            <Image style={css.img} source={img} />
                            <Image />
                        </View>
                    </View>
                </>

                :
                 <View style={css.caixa}>
                    <Text style={css.textbateria}> Reprodução interrompida, Bateria baixa !</Text>

                 </View>   
                
            }
                {rede ? <Text>Recursos Premium</Text> : <Text>Conecte na WIFI</Text>}

        </>
    )
}

const css = StyleSheet.create({
    geral: {
        backgroundColor: "black",
        padding: 7,
        height: 300,
        margin: 20,
        width: "40%"
    },
    texto: {
        textAlign: "center",
        color: "white",
        marginBottom: 20,
        marginTop: 10,
        fontWeight: 'bold'

    },
    img: {
        width: "100%",
        height: "70%",
        borderRadius: 43,
    },
    textbateria: {
        width: "100%",
        height:"100%",
        marginTop: 261,
        color: "white",
        
    },
   caixa:{
    marginTop: 110,
    height:"100%",
    width: "100%",
    marginLeft: 70
   }
}); 
