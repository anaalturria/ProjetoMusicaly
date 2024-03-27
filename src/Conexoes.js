import { StyleSheet, Text, View } from "react-native";

export default function Conexoes() {
    return (
      <View style={{backgroundColor: '#282626', flex: 1, alignItems: "center"}}>
        <View>
            <Text style={css.texto}>Descubra o que seus amigos estão ouvindo!</Text>
        </View>
        <View style={css.caixa}>
            <Text style={css.Imagem}>Imagem</Text>
            <Text style={css.Nome}>Nome</Text>
            <Text style={css.icone}>icone</Text>
        </View>
        <View style={css.caixa}>
            <Text style={css.Imagem}>Imagem</Text>
            <Text style={css.Nome}>Nome</Text>
            <Text style={css.icone}>icone</Text>
        </View>
        <View style={css.caixa}>
            <Text style={css.Imagem}>Imagem</Text>
            <Text style={css.Nome}>Nome</Text>
            <Text style={css.icone}>icone</Text>
        </View>
        <View style={css.caixa}>
            <Text style={css.Imagem}>Imagem</Text>
            <Text style={css.Nome}>Nome</Text>
            <Text style={css.icone}>icone</Text>
        </View>
        <View style={css.caixa}>
            <Text style={css.Imagem}>Imagem</Text>
            <Text style={css.Nome}>Nome</Text>
            <Text style={css.icone}>icone</Text>
        </View>
        <View style={css.caixa}>
            <Text style={css.Imagem}>Imagem</Text>
            <Text style={css.Nome}>Nome</Text>
            <Text style={css.icone}>icone</Text>
        </View>
        </View>
    );
  }
const css = StyleSheet.create({
    Imagem: {
        color: 'white'
    }, Nome: {
        color: 'white'
    }, icone:{
        color: 'white'
    }, caixa: {
        width: "85%",
        height: 80,
        backgroundColor: "#4B4B4B",
        margin: 5,
        borderRadius: 5,
        display: "flex",
        justifyContent:"center",
        alignItems: "center",
        marginBottom: 10
    }, texto: {
        color: 'white',
        marginBottom: 30
        
    }
})
