import React, { Component } from 'react';
import {View,Text,Button,StyleSheet,TouchableOpacity} from 'react-native'
import {SearchBar} from 'react-native-elements'
import {Container, Left, Header, Body, Right,  Icon, Title } from 'native-base';
export default class HeaderMultipleIconExample extends Component {
  render() {
    return (
      // <Header
      // leftComponent={{ icon: 'menu', color: '#fff' }}
      // centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
      // rightComponent={{ icon: 'home', color: '#fff' }}
      // />
          <Header style = {{backgroundColor: 'white',height:95}}>
            <View style={{flex:1,flexDirection:'column'}}>
              <View style={{ flex:1}}>
                <SearchBar 
                //  containerStyle={{flex:1}}
                //  inputContainerStyle={{margin:-8,flex:1}}
                 inputStyle={{fontSize:15}}
                 lightTheme
                 placeholder="Type Here..."/>
              </View>
              <View style={{flex:1,flexDirection:'row',paddingTop:20}}>
                <View style={{flex:1,alignItems:'center'}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Lihat Peta')}>
                 <Text style={{color:'black', marginTop: 5}}>Lihat Peta</Text>
                </TouchableOpacity>
                </View>
                <View style={{flex:1,alignItems:'center',borderBottomWidth:2,borderBottomColor:'green'}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Lihat Daftar')}>
                 <Text style={{color:'green', marginTop: 5}}>Lihat Daftar</Text>
                </TouchableOpacity>
                </View>
              </View> 
            </View>
            </Header>
    );
  }
}