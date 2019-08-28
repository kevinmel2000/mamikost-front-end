    
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
         <View style={styleBlankHistory.container}>
             <View style={styleBlankHistory.containerIcon} >
                 <Ionicons name='ios-cart' size={200} color='green' />
             </View>
             <View style={styleBlankHistory.description} >
                 <Text style={{textAlign:'center'}} >belum ada riwayat properti terbaru</Text>
                 <Text style={{textAlign:'center',color:'#ccc'}} >Riwayat properti yang pernah anda lihat ada dihalaman ini</Text>    
            </View>
             <View style={styleBlankHistory.containerButton} >
             <TouchableOpacity style={styleBlankHistory.button} >
                 <Text style={{color:'white'}} >Cari Kost</Text>
             </TouchableOpacity>
             </View>
         </View>
      )
   }
}

const styleBlankHistory = StyleSheet.create({
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
        backgroundColor:'#70dc65',
        height:'40%',
        width:'80%',
        marginBottom:10
    }
})