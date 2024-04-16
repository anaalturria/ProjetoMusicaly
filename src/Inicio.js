import { Image, StyleSheet, Switch, Text, View } from "react-native";
import { useBatteryLevel } from "expo-battery";
import { useContext, useEffect, useState } from "react";
import * as Network from "expo-network";
import { UserContext } from "./Context/UserContext";


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

    const {cor, controle, setControle, toogleSwitch } = useContext (UserContext);

    return (
        <>
            {bateria > 20 ?
                <>
                    <View style={{backgroundColor: cor,
                            padding: 2,
                            height: 300,
                            margin: 20,
                            width: "40%"}}>

                            <Text style={{ textAlign: "center",
                                color: controle ? 'white' : 'black',
                                marginBottom: 20,
                                marginTop: 10,
                                fontWeight: 'bold'}}>{texto}</Text>
                            <Image style={css.img} source={img} />
                            <Image />
                        </View>

                </>

                :
                 <View style={css.caixa}>
                    <Text style={{width: "100%",
        height:"100%",
        marginTop: 261,
        color: controle ? 'black' : 'white',}}> Reprodução interrompida, Bateria baixa !</Text>

                 </View>   
                
            }
                {rede ? <Text >Recursos Premium</Text> : <Text style={{
        color: controle ? 'black' : 'white',}}>Conecte na WIFI</Text>}

        </>
    )
}

const css = StyleSheet.create({
    
    
    img: {
        width: "100%",
        height: "70%",
        borderRadius: 43,
    },
   
   caixa:{
    marginTop: 110,
    height:"50",
    width: "100%",

   }
}); 
