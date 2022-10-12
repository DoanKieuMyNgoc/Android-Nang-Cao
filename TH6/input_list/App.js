import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Input_List from './Input_List';
import { useState } from 'react';
export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Input">
            <Stack.Screen name='InputScreeen' component={InputScreeen} />
            <Stack.Screen name='ListScreen' component={ListScreen} />
          </Stack.Navigator>
        </NavigationContainer>
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
const InputScreeen = ({ navigator }) => {
  const [Ten, setTen] = useState('')
  const [NamSinh, setNamSinh] = useState('')
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Nhập dữ liệu</Text>
      <TextInput style={{ border: 1 }}
        onChangeText={(txt) => setTen(txt)}
        value={Ten}
        placeholder="Nhập tên" />
      <TextInput style={{ border: 1 }}
        onChangeText={(txt) => setNamSinh(txt)}
        value={NamSinh}
        placeholder="Nhập năm sinh" />
      <Button
        onPress={() => navigation.navigate('ListScreen', {
          Ten, NamSinh
        })}
        title="Gọi đến từ Activity khác"
      />

    </View>
  )
}
const ListScreen = ({ route, navigation }) => {
  const { Ten } = route.params;
  const { NamSinh } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{Ten}</Text>
      <Text>{NamSinh}</Text>
    </View>
  )
}
