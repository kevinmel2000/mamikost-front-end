import React, {Component} from 'react';
import {Footer, FooterTab, Icon, Text, Button} from 'native-base';
import { StyleSheet, Image } from 'react-native';
export default class FooterNav extends Component{
    render(){
        var {navigate} = this.props.navigation;
        return(
        <Footer>
         <FooterTab style={style.bg}>
          <Button vertical>
           <Text>Halaman1</Text>
          </Button>
          <Button vertical>
           <Text>Halaman2</Text>
          </Button>
          <Button vertical>
           <Text>Halaman3</Text>
          </Button>
        </FooterTab>
        </Footer>
        )
    }
}
const style = StyleSheet.create({
    bg:{
    backgroundColor: 'white',
    elevation:1
    }
})