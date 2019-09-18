import React, {Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'

class Wishlist extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.content}>
                     <Text style={styles.h1}>Belum ada favorit</Text>
                </View>
            </View>
        )
    }
}

export default Wishlist

styles = StyleSheet.create({
    container:{
        flex:1
    },
    content:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    h1:{
        fontSize:25
    }
})