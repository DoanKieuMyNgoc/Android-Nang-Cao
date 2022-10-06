import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [Item, setIteem] = useState([
    { key: 1, ten: 'Ca nấu lẩu, nấu mì mini', anh: require('./assets/1.png'), sale: 'Devang' },
    { key: 2, ten: '1KG khô gà bơ tỏi', anh: require('./assets/2.png'), sale: 'LTD Food' },
    { key: 3, ten: 'Xe cần cẩu đa năng', anh: require('./assets/3.png'), sale: 'Thế giới đồ chơi' },
    { key: 4, ten: 'Đồ chơi dạng mô hình', anh: require('./assets/4.png'), sale: 'Thế giới đồ chơi' },
    { key: 5, ten: 'Lãnh đạo đơn giản', anh: require('./assets/5.png'), sale: 'Minh Long Book' },
    { key: 6, ten: 'Hiểu lòng trẻ con', anh: require('./assets/6.png'), sale: 'Minh Long Book' },
    { key: 7, ten: 'Donal Trump thiên tài lãnh đạo', anh: require('./assets/7.png'), sale: 'Minh Long Book' },
    { key: 8, ten: 'Donal Trump thiên tài lãnh đạo', anh: require('./assets/7.png'), sale: 'Minh Long Book' },
    { key: 9, ten: 'Donal Trump thiên tài lãnh đạo', anh: require('./assets/7.png'), sale: 'Minh Long Book' },
    { key: 10, ten: 'Donal Trump thiên tài lãnh đạo', anh: require('./assets/7.png'), sale: 'Minh Long Book' },
    { key: 11, ten: 'Donal Trump thiên tài lãnh đạo', anh: require('./assets/7.png'), sale: 'Minh Long Book' },
    { key: 12, ten: 'Donal Trump thiên tài lãnh đạo', anh: require('./assets/7.png'), sale: 'Minh Long Book' },
  ])


  return (
    <View style={styles.container}>
      <View style={{
        height: '5%',
        padding: 7, width: '100%', backgroundColor: '#3f90ab', flexDirection: 'row', justifyContent: 'center'
      }}>
        <View style={{ flex: 1, width: 23, height: 23 }}>
          <Image source={require('./assets/back.png')}></Image></View>
        <Text style={{ flex: 4, textAlign: 'center', color: '#fff' }}>CHAT</Text>
        <View style={{ flex: 1, alignItems: 'flex-end', width: 23, height: 23 }}>
          <Image source={require('./assets/giohang.png')}></Image></View>
      </View>

      <ScrollView style={{ width: '100%' }}>
        {
          Item.map((item) => {
            return (
              <View style={{
                flexDirection: 'row',
                backgroundColor: '#fff',
                margin: 2, borderWidth: 1, width: '100%', padding: 10
              }} key={item.key}>
                <View style={{ width: 74, height: 74, flex: 1 }}>
                  <Image source={item.anh}></Image>
                </View>
                <View style={{ flex: 2, flexDirection: 'column' }}>
                  <Text>{item.ten}</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginRight: 10 }}>Shop</Text>
                    <Text style={{ color: '#d61529' }}>{item.sale}</Text>
                  </View>

                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                  <Text style={{
                    backgroundColor: '#d61529', textAlign: 'center', padding: 10
                  }}>CHAT</Text>
                </View>

              </View>
            )
          })
        }
      </ScrollView>
      <View style={{
        height: '5%',
        padding: 10, width: '100%', backgroundColor: '#3f90ab', flexDirection: 'row', justifyContent: 'center'
      }}>
        <View style={{ flex: 1, width: 23, height: 23 }}>
          <Image source={require('./assets/memu.png')}></Image></View>
        <View style={{ flex: 4, alignItems: 'center', width: 23, height: 23 }}>
          <Image source={require('./assets/home.png')}></Image></View>
        <View style={{ flex: 1, width: 23, height: 23, alignItems:'flex-end' }}>
          <Image source={require('./assets/load.png')}></Image></View>
      </View>

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bec8cc',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 20,
    marginBottom: 20
  },
});
