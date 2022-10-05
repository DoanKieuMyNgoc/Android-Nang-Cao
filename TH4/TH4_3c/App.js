import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Pressable, Text, View, Image, Button, Alert, Modal, TouchableHighlight } from 'react-native';
// import { Component } from './information';
import React from 'react';
import { useState } from 'react';



export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (

    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>

          <View >

            <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center', width: '100%', borderWidth: 1 }}>
              <View style={{ borderWidth: 1, flex: 1, width: 70, height: 100 }}>
                <Image style={{ borderWidth: 1, width: 70, height: 100 }} source={require('./assets/bac.png')}></Image>
              </View>


              <View style={{ borderWidth: 1, flex: 2, flexDirection: 'column' }}>
                <Text >Điện Thoại Vsmart Joy 3</Text>
                <Text >Hàng chính hãng</Text>
              </View>
            </View>


            <View style={{ flex: 5, borderWidth: 1 }}>
              <Text>Chọn một màu bên dưới</Text>

              <Image source={require('./assets/Rectangle4.png')}></Image>
              <Image source={require('./assets/Rectangle5.png')}></Image>
              <Image source={require('./assets/Rectangle6.png')}></Image>
              <Image source={require('./assets/Rectangle7.png')}></Image>
            </View>


            <View style={{ flex: 1, borderWidth: 1 }}>
              <Button onPress={() => setModalVisible(!modalVisible)} title='Xong'></Button>

            </View>

          </View>


        </View>
      </Modal>


      {/* view chinhs */}
      <View>
        <Image source={require('./assets/bac.png')}
          style={{
            borderWidth: 8,
            alignSelf: 'center'
          }}></Image>
      </View>

      <View style={{ marginHorizontal: 20 }}>
        <Text >
          Điện thoại Vsmart Joy 3- Hàng chính hãng
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

          <View style={{
            flexDirection: 'row'
          }}>
            <Image source={require('./assets/Star1.png')}></Image>
            <Image source={require('./assets/Star1.png')}></Image>
            <Image source={require('./assets/Star1.png')}></Image>
            <Image source={require('./assets/Star1.png')}></Image>
            <Image source={require('./assets/Star1.png')}></Image>
          </View>
          <Text style={{ flex: 1 }}>(Xem 828 đánh giá)</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontWeight: 'bold' }}>1.790.000 đ</Text>
          <Text style={{ textDecorationLine: 'line-through' }}>1.790.000 đ</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ textTransform: 'capitalize', color: '#f2100c' }}>Ở dâu rẻ hơn hoàn tiền</Text>
          <Image source={require('./assets/chamhoi.png')} ></Image>
        </View>


        <View style={{
          flexDirection: 'row',
          borderWidth: 2,
          borderRadius: 20,
          alignSelf: 'center',
          padding: 10,
          marginLeft: 10,
          marginRight: 10,
        }}>
          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 2 }}>
            <Button title='4 MÀU-CHỌN MÀU '
              borderWidth='10'
              onPress={() => setModalVisible(true)}
            ></Button></View>
          <Text style={{
            fontSize: 25,
            flex: 1, flexWrap: 'wrap',
            alignSelf: 'flex-end'
          }}></Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <Button title='CHỌN MUA'
            color='#f2100c'></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    paddingTop: 20,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff'
  }

});
