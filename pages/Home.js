import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, ImageBackground } from 'react-native';

export default function Home(){
  return (
    <View style={styles.container}>
      <ImageBackground  style={styles.imagem} source={require('../assets/dio.png')}>

      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    imagem:{
        flex:1,
        width:300,
          
    }
  });