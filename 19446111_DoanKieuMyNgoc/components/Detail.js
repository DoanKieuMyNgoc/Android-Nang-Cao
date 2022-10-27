import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


 function Detail({navigation}) {
  const { product } = props
  
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 5, justifyContent: 'center' }}>
          <Image source={require("../assets/g1.png")}></Image>
        </View>
        <View style={{ alignItems: 'flex-end', justifyContent: 'center', flex: 5 }}>
          <Image source={require("../assets/d2.png")}></Image>
        </View>
      </View>

      <View style={{}}>
        <Text>{product.name}</Text>
      </View>

    </View >
  );
}
export default Detail
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 50,
    flexDirection: 'column',
    marginHorizontal: 40
  },
});
