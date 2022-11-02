import { Text, StyleSheet, View, Image, Easing, Button } from 'react-native'
import React, { Component } from 'react'
import { Animated } from 'react-native'

export default class BT6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animation: new Animated.Value(0)
        }
    }
    _animation = () => {
        Animated.sequence([
            Animated.timing(this.state.animation, {
                toValue: 100,
                duration: 500,
                easing: Easing.back()
            }),
            Animated.timing(this.state.animation, {
                toValue: 0,
                duration: 500,
                easing: Easing.back()
            }),
            // Animated.timing(this.state.animation, {
            //     toValue: 100,
            //     duration: 250,
            //     easing: Easing.back()
            // }),
            // Animated.timing(this.state.animation, {
            //     toValue: 0,
            //     duration: 250,
            //     easing: Easing.back()
            // }),
            // Animated.timing(this.state.animation, {
            //     toValue: -100,
            //     duration: 250,
            //     easing: Easing.back()
            // }),
            // Animated.timing(this.state.animation, {
            //     toValue: 0,
            //     duration: 250,
            //     easing: Easing.back()
            // })
        ]).start(() => {
            this._animation()
        })
    }
    render() {
        const interpolatedRotateAnimation = this.state.animation.interpolate({
            inputRange: [0, 100],
            outputRange: [ '90deg', '-90deg'],
        })
        return (
            <View style={styles.container}>
                <Animated.Image
                    style={[styles.image,
                    { transform: [{ rotate: interpolatedRotateAnimation }] }]}
                    source={require('../assets/bt6.png')}
                >

                </Animated.Image>
                <Button
                    title='Push'
                    onPress={this._animation}
                >

                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 100,
        width: 100
    }
})