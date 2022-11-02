import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BT1 from '../screens/BT1'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import BT2 from '../screens/BT2';
import BT3 from '../screens/BT3';
import BT4 from '../screens/BT4';
import BT5 from '../screens/BT5';
import BT6 from '../screens/BT6';
const Stack = createStackNavigator();
function ShopNav() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="BT1" component={BT1} />
            <Stack.Screen name="BT2" component={BT2} />
            <Stack.Screen name="BT3" component={BT3} />
            <Stack.Screen name="BT4" component={BT4} />
            <Stack.Screen name="BT5" component={BT5} />
            <Stack.Screen name="BT6" component={BT6} />
        </Stack.Navigator>
    )
}
const MainNavigator = () => {
    return (
        <NavigationContainer>
            <ShopNav></ShopNav>
        </NavigationContainer>
    )
}
export default MainNavigator