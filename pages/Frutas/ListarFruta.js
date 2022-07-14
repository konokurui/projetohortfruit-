import React,{ useEffect , useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { buscarTodasFrutas } from '../Frutas/ModelFrutas'


export default function ListarFruta({navigation}){

const [dadosFrutas,setdadosFrutas] = useState([]);


useEffect(async() => {
  const resp = await buscarTodasFrutas()
  setdadosFrutas(resp);
},[]);

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Lista de Frutas</Text>

      <TouchableOpacity style={styles.botaoCadFruta} onPress={()=> navigation.navigate('Cadastrar')}>
        <Text style={styles.botaoTextoCadFruta}>Cadastrar Fruta</Text>
      </TouchableOpacity>
    <StatusBar style="auto"/>

      <FlatList
        data={dadosFrutas}
        keyExtractor={dadosFrutas => dadosFrutas.id}
        renderItem={({item})=>
        <TouchableOpacity onPress={()=> navigation.navigate('Alterar')}>
          <View style={styles.grupoFrutas}>

              <Text style={styles.textoBotaoFruta}>{item.fruta}</Text>
              <Text style={styles.textoBotaoValor}>{item.valor}</Text>

          </View>
        </TouchableOpacity>

        }
      />
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3EFF00',
    },
    titulo:{
      fontSize:30,
      color:"#2a9d8f",
      textAlign:'center',
      justifyContent:'center',
      marginVertical:20
    },
    grupoFrutas:{
      backgroundColor:'#D100FF',
      margin: 15,
      padding: 5,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    textoBotaoFruta:{
      fontSize:20
    },
    textoBotaoValor:{
      fontSize:20
    },  
    botaoCadFruta:{
      backgroundColor:'#FF0046',
      margin: 15,
      padding: 5,
      borderRadius: 10
    },
    botaoTextoCadFruta:{
      fontSize:18
    },
  });