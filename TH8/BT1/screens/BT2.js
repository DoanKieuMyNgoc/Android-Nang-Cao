import { View,  Animated, StyleSheet, Button } from 'react-native'
import React, { useEffect, useRef } from 'react'

export default function BT2() {
  const fadeAnim = useRef(new Animated.Value(0)).current;


  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 300,
      duration: 5000
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
      <Button onPress={fadeIn} title="Left" />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
