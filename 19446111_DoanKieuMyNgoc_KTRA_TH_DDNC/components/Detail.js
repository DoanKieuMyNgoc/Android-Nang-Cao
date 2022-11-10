import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import MaterialCommunityIcons from 'react-native-vector-icons/AntDesign'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Heart from '../screens/Heart';
import ThongBao from '../screens/ThongBao';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Account from '../screens/Account';
const Tab = createBottomTabNavigator();
export default function Detail({  }) {
  return (
    <NavigationContainer
    independent={true}>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name='home' color={color} size={30} />
            )
          }}
          
        />
         <Tab.Screen name='Heart' component={Heart}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='heart' color={color} size={30} />
            )
          }}
        />
         <Tab.Screen name='Thongbao' component={ThongBao}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='md-notifications-sharp' color={color} size={30} />
            )
          }}
        />
         <Tab.Screen name='Account' component={Account}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='md-person-sharp' color={color} size={30} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}