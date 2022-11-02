import { View, Text, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { StyleSheet } from 'react-native';

export default function BT1() {
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
