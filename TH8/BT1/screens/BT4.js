import { View, Text, Animated, StyleSheet, Image } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Dimensions } from 'react-native';
var { width, height } = Dimensions.get('window')

export default function BT4() {

  const apear = useRef(new Animated.Value(0)).current;
  const move = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(
      move,
      {
        toValue: width-75,
        duration: 2000,
      }
    ).start();
  }, [move])

  useEffect(() => {
    Animated.timing(
      apear,
      {
        toValue: 1,
        duration: 4500,
      }
    ).start();
  }, [apear])


  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {

            opacity: apear
          }

        ]}
      >
        <Image style={styles.img} source={require("../assets/bt4.jpg")} />
      </Animated.View>
      <Animated.View
        style={[
          styles.fadingContainer,
          {

            marginLeft: move
          }

        ]}>
        <Text style={styles.text}>TEXT</Text>
      </Animated.View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    padding: 0,
    margin: 0
  },
  img: {
    width: 200,
    height: 500,
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 0

  },
  text: {
    fontSize: 30,
  }
});