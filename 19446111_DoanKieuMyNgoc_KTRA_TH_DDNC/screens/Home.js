import { View, Text, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Home = () => {
  return (
    <View>
      <View style={{flexDirection: 'row', alignContent:'space-between'}}>
        <Image source={require('../assets/')}/>
        <Text> Hello, Rakib</Text>
        <Ionicons name='md-notifications-outline' size={30}/>
      </View>
    </View>
  )
}

export default Home