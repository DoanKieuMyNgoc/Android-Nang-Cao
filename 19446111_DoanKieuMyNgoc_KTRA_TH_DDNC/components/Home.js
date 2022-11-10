import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
import Detail from './Detail'

export default function Home({ navigation }) {
    return (
        <View style={{ flex: 1, flexDirection: 'column', alignItems:'center', backgroundColor:'pink' }}>
            <Text style={{fontSize: 40, fontWeight: 'bold', color:'white'}}>Ice Dream Shop</Text>
            <Image style={{ flex: 1}} source={require('../assets/kem_v1.jpg')} />
            <TouchableOpacity
                onPress={() => { navigation.navigate('Detail') }}
            >
                <Text style={{alignSelf: 'flex-end'}}>Explore</Text>
            </TouchableOpacity>

        </View>
    )
}