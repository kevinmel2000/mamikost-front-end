import React, { Component } from 'react';
import {TextInput,View,Text,ScrollView,TouchableOpacity,StyleSheet} from 'react-native'
import {Container} from 'native-base'
import {FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

export default class Iklan extends Component {

  render() {
    
    return (
        <Container>
        <ScrollView>
         <View> 
         <TextInput
                placeholder='email'
                underlineColorAndroid='black'
                placeholderTextColor='black'
                keyboardType='email-address'
                style={styles.inputField}/>
            <TextInput
                placeholder='password'
                underlineColorAndroid='black'
                placeholderTextColor='black'
                secureTextEntry={true}
                style={styles.inputField}/>      
         </View>
        </ScrollView>
        <TouchableOpacity>
         <View style={{backgroundColor:'#14440f',alignItems:'center',height:40}}><Text style={{color:'white',paddingTop:10}} >Selanjutnya</Text></View>
        </TouchableOpacity>
        </Container>
    )
  }
}
const styles = StyleSheet.create({
    inputField: {
    width: 280,
    color: 'black',
    borderColor: 'black',
    marginTop: 5
    },
    Wrapper : {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F3A93'
    },
    text :{
    color: 'blue',
    fontSize: 23
    }
    });
    