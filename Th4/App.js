import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, ImageBackground, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={
        {backgroundColor:'#ffffff',
        padding:10
      }
      }>
      <View  style={styles.row_1}>
        <Image source={require('./assets/book.png')}></Image>
        <View style={styles.view_tt}>
          <Text style={styles.text_1}>Nguyên hàm tích phân và ứng dụng</Text> 
          <Text style={styles.text}>Cung cấp bởi Tiki Tranding</Text>
          <Text style={styles.text}>141.800 đ</Text> 
          <Text style={styles.text}>141.800 đ</Text>
          <View style={styles.view_soluong}>
            <Image source={require('./assets/tru.png')}></Image>
            <Text style={{marginLeft:5, marginRight:5}}>1</Text>   
            <Image source={require('./assets/cong.png')}></Image>         
            <Text style={styles.text_2}>Mua sau</Text>
          </View>
        </View>
      </View>

      <View  style={styles.row_2}>
        <Text style={styles.text}>Mã giảm giá đã lưu</Text>
        <Text style={styles.text_3}>Xem tại đây</Text>   
      </View>

      <View style={styles.row_2}>
        <View style={{borderColor:'#000000', borderRadius:5, flexDirection:'row'}}>
          <Image source={require('./assets/yellow_block.png')}></Image>
          <Text>Mã giảm giá</Text>
        </View>
        <Button style={{backgroundColor:'#0000cc', text:'#ffffff'}}>Áp dụng</Button>
      </View>

    </View>
    <View style={{backgroundColor:'#ffffff',
        padding:10}}>
        <Text> Bạn có phiếu quà tặng Tiki/Got it/Urbox?</Text>
        <Text>Nhập tại đây</Text>
    </View>
    <View style={{backgroundColor:'#ffffff',
        padding:10}}>
        <Text> Tạm tính</Text>
        <Text>141.800 đ</Text>
    </View>


      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    flex: 1,
    backgroundColor: '#808080',
    flexDirection:'column',
    justifyContent:'flex-start'
  },
  row_1:{
    marginTop:0,
    flexDirection:'row',
    marginLeft:20
    },
  row_2:{
    margin:0,
    flexDirection:'row',
    marginLeft:20
    },

  text:{  
    margin:5  ,
    fontSize:12,
    fontFamily:'Roboto'
  },
  text_1:{  
    marginTop:0 ,
    marginLeft:5
  },
  text_2:{  
    color:'#0000cc',
    marginLeft:50
  }, 
  text_3:{  
    margin:5,
    color:'#0000cc'
  },
  view_tt:{
    marginTop:0,
    flexDirection:'column'
  },
  view_soluong:{
    marginLeft:10,
    flexDirection:'row'
  }
  
});
