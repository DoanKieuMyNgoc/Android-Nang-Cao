import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, FlatList } from 'react-native';

import { useState } from 'react';
import SanPham from './SanPham';

export default function App() {
  const product = [
    {
      urlImage: require("./assets/giacchuyen.png"),
      name: "Cáp chuyển từ Cổng USB sang PS2...",
    },
    {
      urlImage: require("./assets/daynguon.png"),
      name: "Cáp chuyển từ Cổng USB sang PS2...",
    },
    {
      urlImage: require("./assets/dauchuyendoipsps.png"),
      name: "Cáp chuyển từ Cổng USB sang PS2...",
    },
    {
      urlImage: require("./assets/dauchuyendoi.png"),
      name: "Cáp chuyển từ Cổng USB sang PS2...",
    },
    {
      urlImage: require("./assets/carbusbtops.png"),
      name: "Cáp chuyển từ Cổng USB sang PS2...",
    },
    {
      urlImage: require("./assets/daucam.png"),
      name: "Cáp chuyển từ Cổng USB sang PS2...",
    },
    {
      urlImage: require("./assets/giacchuyen.png"),
      name: "Cáp chuyển từ Cổng USB sang PS2...",
    },
    {
      urlImage: require("./assets/daynguon.png"),
      name: "Cáp chuyển từ Cổng USB sang PS2...",
    },
    {
      urlImage: require("./assets/dauchuyendoipsps.png"),
      name: "Cáp chuyển từ Cổng USB sang PS2...",
    },
    {
      urlImage: require("./assets/dauchuyendoi.png"),
      name: "Cáp chuyển từ Cổng USB sang PS2...",
    },
    {
      urlImage: require("./assets/carbusbtops.png"),
      name: "Cáp chuyển từ Cổng USB sang PS2...",
    },
    {
      urlImage: require("./assets/daucam.png"),
      name: "Cáp chuyển từ Cổng USB sang PS2...",
    },
  ];
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

      <SafeAreaView style={{height: "90%", width:"100%"}}>
        <FlatList
          data={product}
          keyExtractor={(item, index)=> index.toString()}
          numColumns={2}
          renderItem={({ item }) => (<SanPham product={item} />)}>

        </FlatList>
      </SafeAreaView>
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
    marginTop: 30
  },
});
