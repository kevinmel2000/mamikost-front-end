import React, { Component } from 'react';
import {View, Text, ScrollView,Image,StyleSheet,TouchableOpacity} from 'react-native';
import {SearchBar} from 'react-native-elements'
import {Button} from 'native-base'

export default class ListKost extends Component{

    constructor(){
        super();
        this.dataKost = [
            {
                id:1,
                gender:'Putri',
                address:'Jakarta-barat',
                description:'Kost mamirooms jakarta',
                price:'1.000.000',
                booking:'Bisa Booking',
                image:'https://rumahdijual.com/attachments/bandung/25804631d1531824574-sewa-kosan-di-jatinangor-murah-lengkap-photo_2018-07-17_14-58-13.jpg'
            },
            {
                id:2,
                gender:'Putri',
                address:'Kost mamirooms yogyakarta',
                description:'Kost mamirooms yogyakrata',
                price:'500.000',
                booking:'Bisa Booking',
                image:'https://pbs.twimg.com/media/Bpw8n3JCMAAZwim.jpg'
            },
            {
                id:3,
                gender:'Putri',
                address:'Bandung',
                description:'Kost mamirooms Bandung',
                price:'750.000',
                booking:'Bisa Booking',
                image:'https://cdn.idntimes.com/content-images/post/20160504/small-bedroom-interior-design-ideas-meant-to-enlargen-your-space-small-bedroom-ideas-6-b535d04626a599c6c26049d1bbfb6654.jpg'
            },
            {
                id:4,
                gender:'Putri',
                address:'Surabaya',
                description:'Kost mamirooms Surabaya',
                price:'3.750.000',
                booking:'Bisa Booking',
                image:'https://blogpictures.99.co/D4-MPQUYAA1B7G.jpg'
            }
        ]
    }    
render(){

    return(
    <ScrollView>
    <View style={{height:15,backgroundColor:'#ddd'}}></View>
     {this.dataKost.map((item,index)=>(
     
    <View style={{flex:1,marginTop:10}}>
        <TouchableOpacity onPress={()=>{
            this.props.navigate('ViewDetail',
            {
                id:item.id,
                gender:item.gender,
                address:item.address,
                description:item.description,
                price:item.price,
                booking:item.booking,
                image:item.image
            })
        }}>
        <View style={{ borderWidth:2,borderColor:'white'}}>
            <Image 
            style={{height: 150}}
            source={{uri: item.image}}/>
        </View>
        <View><Text style={styles.gender}>{item.gender}</Text></View>
        <View><Text style={styles.price} >Rp. {item.price}</Text></View>
        <View><Text>{item.description}</Text></View>
        <View><Button rounded success style={styles.button}><Text>{item.booking}</Text></Button></View>
        </TouchableOpacity>
    </View>
     ))}
    </ScrollView>
    )}
}

const styles = StyleSheet.create({
    price :{
        fontSize : 20
    },
    gender :{
        color:'pink'
    },
    button:{
        width:90,
        height:30,
        marginTop:10
    }
})