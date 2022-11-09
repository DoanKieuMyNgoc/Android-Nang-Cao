import { View, Text, StyleSheet, Animated } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native';

export default function BT2({ navigation }) {
  const [location, setLocation]
    = useState({
      x: null,
      y: null,
      marginLeft: new Animated.Value(0),
      marginTop: new Animated.Value(0)

    });


  function onPress(evt) {
    // console.log('====================================');
    // var x = evt.nativeEvent.locationX;
    // console.log('====================================');
    // console.log(x);
    // console.log('====================================');
    // var y = evt.nativeEvent.locationY;
    // console.log('====================================');
    setLocation({
      x: Math.random(),
      y: Math.random(),
      marginLeft: Math.random(),
      marginTop: Math.random()

    })
  }

  const { marginTop, marginLeft } = location;
  return (
    <View
      onStartShouldSetResponder={() => true}
      onResponderGrant={onPress}
      style={styles.container}>

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