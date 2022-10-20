import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        const { name, urlImage } = this.props.product
        return (
            <View style={{ flexDirection: 'column' , marginLeft: 50}}>
                <Image source={urlImage} style={{ width: 200, height: 200, alignItems: 'center', justifyContent: 'center' }}></Image>
                <TouchableOpacity>
                    <Text style={{textAlign:'center', fontSize: 25}}>
                        + Ad to cart
                    </Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 30}}>{name}</Text>
                <Text style={{fontWeight:'bold', fontSize: 40}}>$905</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})