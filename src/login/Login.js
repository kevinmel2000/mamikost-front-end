// import React, { Component } from 'react';
// import {NavigationActions} from 'react-navigation'
// import {View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
// import {Icon} from 'native-base'
// export default class Login extends Component{
//     render(){
//     return(
//     <View
//         behavior="padding"
//         style={styles.Wrapper}>
//             <Icon name='home'/>
//             <TextInput
//                 placeholder='email'
//                 underlineColorAndroid='white'
//                 placeholderTextColor='white'
//                 keyboardType='email-address'
//                 style={styles.inputField}/>
//             <TextInput
//                 placeholder='password'
//                 underlineColorAndroid='white'
//                 placeholderTextColor='white'
//                 secureTextEntry={true}
//                 style={styles.inputField}/>
//             <TouchableOpacity>
//                 <TouchableOpacity >
//                 <Text onPress={()=>{this.props.navigation.navigate('Home')}} style={{color:'white', marginTop: 10}}>Login</Text>
//                 </TouchableOpacity>
//             </TouchableOpacity>
//             <TouchableOpacity>
//                 <TouchableOpacity onPress={()=>this.props.navigation.navigate('Signup')}>
//                 <Text style={{color:'white', marginTop: 10}}>SignUp</Text>
//                 </TouchableOpacity>
//             </TouchableOpacity>
//     </View>
//     )
//     }
// }
// const styles = StyleSheet.create({
// inputField: {
// width: 280,
// color: 'white',
// borderColor: 'white',
// marginTop: 5
// },
// Wrapper : {
// flex:1,
// justifyContent: 'center',
// alignItems: 'center',
// backgroundColor: '#1F3A93'
// },
// text :{
// color: 'blue',
// fontSize: 23
// }
// });

import React, {Component} from 'react'
import {Icon} from 'react-native-vector-icons'
import Styles from './Styles'
import {View,Text,Button} from 'react-native'

class Login extends Component {
    render() {
        return (
           <View>
               <Text>This is login</Text>
           </View> 
        )
    }
}

export default Login