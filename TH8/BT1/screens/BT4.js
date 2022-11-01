import { View, Text, Animated, StyleSheet, Image } from 'react-native'
import React, { useEffect, useRef } from 'react'

export default function BT4() {

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 330,
        duration: 2000,
      }
    ).start();
  }, [fadeAnim])


  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {

            opacity: fadeAnim
          }

        ]}
      >
        <Image style={styles.img} source={require("../assets/bt4.jpg")} />
      </Animated.View>
      <Animated.View
        style={[
          styles.fadingContainer,
          {

            marginLeft: fadeAnim
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