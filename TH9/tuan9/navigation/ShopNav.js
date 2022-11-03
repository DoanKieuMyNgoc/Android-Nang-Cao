import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../component/Home'
import BT1 from '../component/BT1';
import BT2 from '../component/BT2';
import BT3 from '../component/BT3';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();
function ShopNav() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='BT1' component={BT1} />
            <Stack.Screen name='BT2' component={BT2} />
            <Stack.Screen name='BT3' component={BT3} />
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