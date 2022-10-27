import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import  BT1  from '../screens/BT1'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import BT2 from '../screens/BT2';
const Stack = createStackNavigator();
function ShopNav() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="BT1" component={BT1} />
            <Stack.Screen name="BT2" component={BT2} />
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