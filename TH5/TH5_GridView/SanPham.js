import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, FlatList } from 'react-native';

class SanPham extends React.Component {
    render() {
        const { name, urlImage } = this.props.product
        return (
            <View style={{ width: "49%", alignItems: "center", marginHorizontal: "1%", borderWidth: 0.74 }}>
                <Image style={{ width: 155, height: 90 }} source={urlImage}></Image>
                <Text>{name}</Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{}}>69.000 đ</Text>
                    <Text>-39%</Text>
                </View>
            </View>
        )
    }
}
export default SanPham