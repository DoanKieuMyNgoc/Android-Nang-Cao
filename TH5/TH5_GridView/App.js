import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FlatView } from './FlatView/FlatView';
import { useState } from 'react';

export default function App() {
 
  return (
    <View style={styles.container}>
      <View style={{
        height: '5%',
        padding: 7, width: '100%', backgroundColor: '#3f90ab', flexDirection: 'row', justifyContent: 'center'
      }}>
        <View style={{ flex: 1, width: 23, height: 23 }}>
          <Image source={require('./assets/back.png')}></Image></View>
        <Text style={{ flex: 4, textAlign: 'center', color: '#fff' }}>CHAT</Text>
        <View style={{ flex: 1, alignItems: 'flex-end', width: 23, height: 23 }}>
          <Image source={require('./assets/giohang.png')}></Image></View>
      </View>

      <FlatView/>
      <View style={{
        height: '5%',
        padding: 10, width: '100%', backgroundColor: '#3f90ab', flexDirection: 'row', justifyContent: 'center'
      }}>
        <View style={{ flex: 1, width: 23, height: 23 }}>
          <Image source={require('./assets/memu.png')}></Image></View>
        <View style={{ flex: 4, alignItems: 'center', width: 23, height: 23 }}>
          <Image source={require('./assets/home.png')}></Image></View>
        <View style={{ flex: 1, width: 23, height: 23, alignItems: 'flex-end' }}>
          <Image source={require('./assets/load.png')}></Image></View>
      </View>
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
});
