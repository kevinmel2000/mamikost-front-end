import React, { Component } from 'react';
import {View,Text,Button,StyleSheet,TouchableOpacity} from 'react-native'
import {SearchBar,Header} from 'react-native-elements'
import {Container, Left, Body, Right,  Icon, Title } from 'native-base';

export default class HeaderHome extends Component {
  render() {
    
    return (
      <View style={{height:80}} >  
        <Header
        style={{shadowOpacity: 0,elevation: 0}}
        containerStyle={{height:60,backgroundColor:'#14440f'}}
        leftComponent={{ icon: 'menu', color: '#fff'}}
        
        centerComponent={{ text: 'TAMBAH DATA IKLAN', style: { color: '#fff',paddingLeft:-120 } }}
        rightComponent={{ text: 'Tanya cs', color: '#fff' ,style:{color:'white'} }} >
          <Icon name='menu' />Tes
         </Header> 
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
    textMenu:{
        fontSize:13,
        color:'white',
        textAlign:'center'
    },
    menu:{
        fontSize:15,
        flex:1,
        paddingTop:20
    },
    menuKecil:{
        fontSize:15,
        flex:0.3,
        paddingTop:20,
        borderBottomColor:'white',
        borderBottomWidth:2
    }
})