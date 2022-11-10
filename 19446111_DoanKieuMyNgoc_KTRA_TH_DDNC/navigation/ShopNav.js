import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Home from '../components/Home';
import Detail from '../components/Detail';
const Stack = createStackNavigator();
function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    )
}
const MainNavigator = () => {
    return (
        <NavigationContainer>
            <StackNavigator></StackNavigator>
        </NavigationContainer>
    )
}
export default MainNavigator