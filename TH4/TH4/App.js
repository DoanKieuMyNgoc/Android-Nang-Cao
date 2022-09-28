import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, 
  ImageBackground, Button, Alert} from 'react-native';

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
          <Text style={{margin:5, 
                      fontSize:12,
                      fontFamily:'Roboto',
                      color: '#f2100c'}}>141.800 đ</Text>
          <Text style={{margin:5, 
                      fontSize:12,
                      fontFamily:'Roboto',
                      textDecorationLine:'line-through'}}>141.800 đ</Text> 
          <View style={styles.view_soluong}>
            <Image source={require('./assets/tru.png')}></Image>
            <Text style={{marginLeft:5, marginRight:5}}>1</Text>   
            <Image source={require('./assets/cong.png')}></Image>         
            <Text style={{color:'#0000cc',
                          marginLeft:100}}>Mua sau</Text>
          </View>
        </View>
      </View>

      <View  style={styles.row_2}>
        <Text style={styles.text}>Mã giảm giá đã lưu</Text>
        <Text style={styles.text_3}>Xem tại đây</Text>   
      </View>

      <View style={styles.row_2}>
        <View style={{borderColor:'#000000', 
                      flexDirection:'row',
                      borderWidth:2,
                      padding:10}}>
          <Image style={{marginRight:10}} source={require('./assets/yellow_block.png')}></Image>
          <Text style={{textTransform:'none', textDecorationStyle:'solid'}}>Mã giảm giá</Text>
        </View>
        <Button title='ÁP dụng'
                onPress={Alert.alert('okokok')}
                style={{marginLeft:100}}>Áp dụng</Button>
      </View>

    </View>
    <View style={{backgroundColor:'#ffffff',
        padding:10, marginTop:10, flexDirection: 'row'}}>
        <Text style={{fontWeight:'bold'}}>Bạn có phiếu quà tặng Tiki/Got it/Urbox?</Text>
        <Text style={{color:'#0000cc',marginLeft:10}}>Nhập tại đây</Text>
    </View>


    <View style={{backgroundColor:'#ffffff',
         flexDirection:'row',fontSize: 18,
         padding:10, marginTop:10}}>          
        <Text style={{ flex:1,fontWeight:'bold'}} > Tạm tính</Text>
        <Text style={{margin:5, 
                      flex:1,
                      fontSize:12,
                      fontFamily:'Roboto',
                      color: '#f2100c', textAlign:'right'}}>141.800 đ</Text>
    </View>

    <View style={{backgroundColor:'#ffffff',
        alignContent:'flex-end',
         flexDirection:'column',fontSize: 18,
         padding:10, justifyContent:'flex-end',
         marginTop:300
         }}>

         <View style={{flexDirection:'row'}}>
            <Text style={{ flex:1,color:'#848e94'}} > Thành tiền</Text>
            <Text style={{margin:5, 
                      flex:1,
                      fontSize:12,
                      fontFamily:'Roboto',
                      color: '#f2100c', textAlign:'right'}}>141.800 đ</Text>
         </View>
         <View >
              <Button title='TIẾN HÀNH ĐẶT HÀNG'
              onPress={Alert.alert('aaaaaaa')}
              color='#f2100c'></Button>
         </View>
         
          

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
    fontFamily:'Roboto',
    fontWeight:'bold'
  },
  text_1:{  
    marginTop:0 ,
    marginLeft:5,
    fontWeight:'bold'
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
