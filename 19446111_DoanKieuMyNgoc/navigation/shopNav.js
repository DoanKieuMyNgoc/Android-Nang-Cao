import { View, Text } from 'react-native'
import React from 'react'
import Detail from '../components/Detail'
import Product from '../components/Product'


export default function shopNav() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Detail" component={Detail} />            
            <Stack.Screen name="Product" component={Product} />
        </Stack.Navigator>
    )
}