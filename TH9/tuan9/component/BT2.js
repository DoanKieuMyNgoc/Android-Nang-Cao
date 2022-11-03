import { View, Text, StyleSheet, Animated } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native';

export default function BT2({ navigation }) {
  const [location, setLocation]
    = useState({
      x: null,
      y: null,
      marginLeft: new Animated.Value(Math.random()),
      marginTop: new Animated.Value(Math.random())

    });


  function onPress(evt) {
    console.log('====================================');
    var x = evt.nativeEvent.locationX;
    console.log('====================================');
    console.log(x);
    console.log('====================================');
    var y = evt.nativeEvent.locationY;
    console.log('====================================');
    setLocation({
      x: x,
      y: y,
      marginLeft: x,
      marginTop: y

    })
  }

  const { marginTop, marginLeft } = location;
  return (
    <View
      onStartShouldSetResponder={() => true}
      onResponderGrant={onPress}
      style={styles.container}>

      <Text>Show something!</Text>

      <Animated.Image
        source={require('../assets/chuot.png')}
        style={{ marginLeft: marginLeft, marginTop: marginTop, width: 50, height: 50, borderRadius: 25 }}
      >
      </Animated.Image>
      <Animated.Image
        source={require('../assets/chuot.png')}
        style={{ marginLeft: marginLeft, marginTop: marginTop, width: 50, height: 50, borderRadius: 25 }}
      >
      </Animated.Image>
      <Animated.Image
        source={require('../assets/chuot.png')}
        style={{ marginLeft: marginLeft, marginTop: marginTop, width: 50, height: 50, borderRadius: 25 }}
      >
      </Animated.Image>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});