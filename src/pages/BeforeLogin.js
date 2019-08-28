    
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
         <View style={styleBeforeLogin.container}>
             <View style={styleBeforeLogin.containerIcon} >
                 <Ionicons name='ios-log-in' size={200} color='green' />
             </View>
             <View style={styleBeforeLogin.description} >
                 <Text style={{textAlign:'center'}} >Kamu belum login nih, yuk login untuk menikmati fitur yukngekost lebih banyak</Text>    
            </View>
             <View style={styleBeforeLogin.containerButton} >
             <TouchableOpacity style={styleBeforeLogin.button} >
                 <Text style={{color:'white'}} >Login</Text>
             </TouchableOpacity>
             <TouchableOpacity>
                 <Text style={{borderBottomWidth:1}} >Syarat dan ketentuan</Text>
             </TouchableOpacity>
             </View>
         </View>
      )
   }
}

const styleBeforeLogin = StyleSheet.create({
    container:{
        flex:1,
    },
    containerIcon:{
        flex:4,
        alignItems:'center',
        justifyContent:'center'
    },
    description:{
        flex:1
    },
    containerButton:{
        flex:1,
        alignItems:'center'
    },
    button:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#d54020',
        height:'40%',
        width:'80%',
        marginBottom:10
    }
})