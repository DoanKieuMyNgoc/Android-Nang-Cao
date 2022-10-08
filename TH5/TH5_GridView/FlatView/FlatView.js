import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import React from 'react';
export function FlatView(props) {
    const [dataGrid, setDataGrid] = useState([
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
      ]);
      
    return(
        <View>
            <FlatList
            data={dataGrid} 
            numColumns={2}
            renderItem={({item})=>
            <Text style={{color:'black'}}>dd</Text>}/>
        </View>
    )
}
   