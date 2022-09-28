import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button } from 'react-native';

export default function App() {
  const [username,setUsername] = useState('') 
  const [password,setPassword] = useState('')
  const acc = [
    {username:'ngoc',pass:'1234'},
    {username:'myngoc',pass:'4321'}
  ]
  function handleLogin() {
    var accItem = acc.find((item) => {
      return username === item.username && password === item.pass;
    })
    if (accItem){
      alert('Đăng Nhập Thành Công!!!')
    } else {
      alert('Đăng nhập thất bại!!!')
    }
  }
  return (
    <View style={styles.container}>
       <TextInput
          style={styles.input}
          placeholder= "Enter username"
          onChangeText={(text) => setUsername(text)}
          value={username}
      />
      <TextInput
          style={styles.input}
          placeholder= "Enter password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
      />
      <Button
        title="Login"
        onPress={handleLogin}
         >
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    margin: 30,
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
});
