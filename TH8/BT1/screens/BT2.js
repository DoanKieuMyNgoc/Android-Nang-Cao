import { View, Animated, StyleSheet, Button } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Dimensions } from 'react-native';
var { width, height } = Dimensions.get('window')
export default function BT2() {
  const fadeAnim = useRef(new Animated.Value(0)).current;


  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: width -30,
      duration: 2000
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
    justifyContent: 'center',
  },
});
