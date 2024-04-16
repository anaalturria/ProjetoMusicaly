import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Contacts from 'expo-contacts';
import { UserContext } from "./Context/UserContext";

export default function Conexoes() {

    const [ contatos, setContatos ] = useState([]);

    async function getConexoes()
    {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === 'granted') {
          const { data } = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.FirstName],
          });
          setContatos(data);
    }
}
useEffect(() => {
    getConexoes();
}, [] );

const {cor, controle, setControle, toogleSwitch } = useContext (UserContext);

    return (
      <View style={{backgroundColor: cor, flex: 1, alignItems: "center"}}>
        <View>
            <Text style={css.texto}>Descubra o que seus amigos estão ouvindo!</Text>
        </View>
        
        <View style={{ flex: 1, flexDirection: 'column' }}>
        {contatos.map((contact) => (
          <View key={contact.recordID} style={css.caixaindividual}>
                <View style={css.Textealinha}>
                    <MaterialCommunityIcons name="account-circle-outline" style={css.icone}/>
                    <Text style={css.Nome}>{contact.firstName}</Text> 
                    <MaterialCommunityIcons name="account-plus" style={css.iconedois}/>
                </View>
          </View>

            ))}

        </View>
        
        </View>
    );
  }
const css = StyleSheet.create({
    icone: {
        color: 'white',
        marginRight: 80,
        fontSize: 40,
    },
    iconedois: {
        color: 'white',
        fontSize: 40,
        marginLeft: 80

    }, Nome: {
        color: 'white',


    },  caixaindividual: {
        width: "95%",
        height: 80,
        backgroundColor: "#4B4B4B",
        borderRadius: 5,
        justifyContent:"center",
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 30,
        borderBottomColor: 'white',
        borderColor: 'white'
        
    }, texto: {
        color: 'white',
        marginBottom: 50,
        marginTop: 85,
        fontWeight: "bold" 
    }, Textealinha: {
        flexDirection: 'row', 
        alignItems: 'center',
        marginBottom: 40,
        borderBottomColor: 'white',
    }
})
