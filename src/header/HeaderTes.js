import React, {Component} from 'react'
import {View,Text} from 'react-native'
import {Icon} from 'react-native-vector-icons'
class Footer extends Component{
    render(){
        return(
        <View>    
        <View
            vertical
            active={props.navigationState.index === 0}
            onPress={() => props.navigation.navigate("Saved")}>
            <Icon name="bowtie" />
            <Text>Lucy</Text>
        </View>
        <View
            vertical
            active={props.navigationState.index === 1}
            onPress={() => props.navigation.navigate("Profile")}>
            <Icon name="briefcase" />
            <Text>Nine</Text>
        </View>
        <View
            vertical
            active={props.navigationState.index === 2}
            onPress={() => props.navigation.navigate("Chat")}>
            <Icon name="headset" />
            <Text>Jade</Text>
        </View>
        </View>
        )
    }
}