    
import React, { Component } from 'react'
import {
   View,
   Text,
   StyleSheet,
   TouchableOpacity
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class BeforeLogin extends Component {
   render() {
      return (
         <View style={styleChat.container}>
             <View style={styleChat.description} >
                 <Text style={{textAlign:'center',justifyContent:'center'}} >Sedang dalam tahap pengembangan</Text>
            </View>
         </View>
      )
   }
}

const styleChat = StyleSheet.create({
    container:{
        flex:1,
    },
    description:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
})