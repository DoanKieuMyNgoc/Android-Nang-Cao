import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Animated } from 'react-native';
import React, { useRef, useEffect } from 'react';

export default function App() {
  const fadeAnim = useRef(new Animated.Value(0)).current;


  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
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
            // Bind opacity to animated value
            opacity: fadeAnim
          }

        ]}

      >
        <Text style={{ fontSize: 25 }}>Welcome to Animation React Native</Text>
      </Animated.View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
