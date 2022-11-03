import { StatusBar } from 'expo-status-bar';
import { useState, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { Image, Button } from 'react-native';
export default function App() {

  const [location, setLocation]
    = useState({
      x: null,
      y: null,
      marginLeft: new Animated.Value(0),
      marginTop: new Animated.Value(0)

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
  function onMove(evt) {
    console.log('====================================');
    console.log(location);
    console.log('====================================');
    // setLocation({marginLeft: x, marginTop: y })
  }
  function onRelease() {
    console.log("Realse!");
  }
  const { marginTop, marginLeft } = location;
  return (
    <View
      onStartShouldSetResponder={() => true}
      // onMoveShouldSetResponder={() => true}
      onResponderGrant={onPress}
      // onResponderMove={onMove}
      // onResponderRelease={onRelease}
      style={styles.container}>

      <Text>Show something!</Text>

      <Animated.Image
        source={require('./assets/meo_2.png')}
        style={{ marginLeft: marginLeft, marginTop: marginTop, width: 300, height: 300 , borderRadius: 150}}
      >

      </Animated.Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
