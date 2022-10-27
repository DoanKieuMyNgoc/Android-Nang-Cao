import { View, Text, Button, StyleSheet, Animated } from 'react-native'
import React, { useRef } from 'react'

export default function BT3() {
  const fadeAnim = useRef(new Animated.Value(0)).current;


  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 377,
      duration: 10000
    }).start();
  };
  const fadeStop = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 377,
      duration: 10000
    }).start();
  };
  const fadeReset = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 0
    }).start();
  };


  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {

            marginLeft: fadeAnim
          }

        ]}

      >
        <View style={{ width: 30, height: 30, backgroundColor: "black" }}></View>
      </Animated.View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Button title='Start' onPress={fadeIn} />
        <Button title='Stop' />
        <Button title='Reset' onPress={fadeReset} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});