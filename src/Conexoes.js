import { StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Conexoes() {
    return (
      <View style={{backgroundColor: '#282626', flex: 1, alignItems: "center"}}>
        <View>
            <Text style={css.texto}>Descubra o que seus amigos estão ouvindo!</Text>
        </View>
        <View style={css.caixa}>
            <View style={css.Textealinha}>
                <MaterialCommunityIcons name="account-circle-outline" style={css.icone}/>
                <Text style={css.Nome}>analturria</Text>
                <MaterialCommunityIcons name="account-plus" style={css.iconedois}/>
            </View>
        </View>
        <View style={css.caixa}>
            <View style={css.Textealinha}>
                <MaterialCommunityIcons name="account-circle-outline" style={css.icone}/>
                <Text style={css.Nome}>anaprrx___</Text>
                <MaterialCommunityIcons name="account-plus" style={css.iconedois}/>
            </View>
        </View>
        <View style={css.caixa}>
            <View style={css.Textealinha}>
                <MaterialCommunityIcons name="account-circle-outline" style={css.icone}/>
                <Text style={css.Nome}>anagreatti</Text>
                <MaterialCommunityIcons name="account-plus" style={css.iconedois}/>
            </View>
        </View>
        <View style={css.caixa}>
            <View style={css.Textealinha}>
                <MaterialCommunityIcons name="account-circle-outline" style={css.icone}/>
                <Text style={css.Nome}>julianisilva</Text>
                <MaterialCommunityIcons name="account-plus" style={css.iconedois}/>
            </View>
        </View>
        <View style={css.caixa}>
            <View style={css.Textealinha}>
                <MaterialCommunityIcons name="account-circle-outline" style={css.icone}/>
                <Text style={css.Nome}>caua.m33</Text>
                <MaterialCommunityIcons name="account-plus" style={css.iconedois}/>
            </View>
        </View>
        <View style={css.caixa}>
            <View style={css.Textealinha}>
                <MaterialCommunityIcons name="account-circle-outline" style={css.icone}/>
                <Text style={css.Nome}>pedrolindo</Text>
                <MaterialCommunityIcons name="account-plus" style={css.iconedois}/>
            </View>
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

    },  caixa: {
        width: "85%",
        height: 80,
        backgroundColor: "#4B4B4B",
        margin: 5,
        borderRadius: 5,
        justifyContent:"center",
        alignItems: "center",
        marginBottom: 10,
        flexDirection: 'column',
        alignItems: 'center',
        
    }, texto: {
        color: 'white',
        marginBottom: 50,
        marginTop: 85,
        fontWeight: "bold" 
    }, Textealinha: {
        flexDirection: 'row', 
        alignItems: 'center',
        
    }
})
