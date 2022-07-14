import React,{useState} from "react";
import { Text, View, StyleSheet, Alert, TouchableOpacity, TextInput } from 'react-native';
import { salvarNovaFruta } from "./ModelFrutas";

export default function CadastrarFruta({navigation}){
    const [idp, setIdp] = useState('');
    const [frutap, setFrutap] = useState('');
    const [valorp, setValorp] = useState('');
    const [fotop, setFotop] = useState('');

    async function cadastro(){
        const resultado = await salvarNovaFruta(idp,frutap,valorp,fotop);
        if(resultado === 'Sucesso'){
            Alert.alert('Fruta Cadastrada com Sucesso!');
            navigation.goBack();
        }else{
            Alert.alert('Erro no cadastro da fruta.');
        }
    } 

    return(
        <View style={styles.container}>
            <TextInput 
            value={idp}
            placeholder="Digite o Código da Fruta"
            style={styles.textInputTodos}
            onChangeText={setIdp}
            />
            <TextInput 
            value={frutap}
            placeholder="Digite o Nome da Fruta"
            style={styles.textInputTodos}
            onChangeText={setFrutap}
            />
            <TextInput 
            value={valorp}
            placeholder="Digite o Valor da Fruta"
            style={styles.textInputTodos}
            onChangeText={setValorp}
            />
            <TextInput 
            value={fotop}
            placeholder="Insira a URL da foto da fruta"
            style={styles.textInputTodos}
            onChangeText={setFotop}
            />

            <TouchableOpacity style={styles.botaoCadastrar} onPress={cadastro}>
                <Text style={styles.textoBotaoCadastrar}>Cadastrar</Text>
            </TouchableOpacity>

        </View>
    );
}

        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#e9c46a',
                marginTop:50
            },
            botaoCadastrar:{
                backgroundColor:'#2a9d8f',
                margin: 15,
                padding: 5,
                borderRadius: 10
            },
            textInputTodos:{
                fontSize: 18
            },
        })
    
