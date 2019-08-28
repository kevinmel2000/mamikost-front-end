import React, { Component } from 'react';
import {View, Text, ScrollView,Image,StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements'
import {Button,Container} from 'native-base'


export default class ViewDetail extends Component{

    constructor(){
        super();
        this.dataKost = [
            {
                id:1,
                gender:'Putri',
                address:'Jakarta-barat',
                description:'Kost mamirooms jakarta',
                price:'1.750.000',
                booking:'Bisa Booking',
                image:'https://rumahdijual.com/attachments/bandung/25804631d1531824574-sewa-kosan-di-jatinangor-murah-lengkap-photo_2018-07-17_14-58-13.jpg',
                update:'12 August 2019',
                widthRoom:'5x3 m'
                
            },
            {
                id:2,
                gender:'Putri',
                address:'Kost mamirooms yogyakarta',
                description:'Kost mamirooms yogyakrata',
                price:'1.750.000',
                booking:'Bisa Booking',
                image:'https://pbs.twimg.com/media/Bpw8n3JCMAAZwim.jpg',
                update:'12 August 2019',
                widthRoom:'5x3 m'

            },
            {
                id:3,
                gender:'Putri',
                address:'Bandung',
                description:'Kost mamirooms Bandung',
                price:'1.750.000',
                booking:'Bisa Booking',
                image:'https://cdn.idntimes.com/content-images/post/20160504/small-bedroom-interior-design-ideas-meant-to-enlargen-your-space-small-bedroom-ideas-6-b535d04626a599c6c26049d1bbfb6654.jpg',
                update:'12 August 2019',
                widthRoom:'5x3 m'
            },
            {
                id:4,
                gender:'Putri',
                address:'Surabaya',
                description:'Kost mamirooms Surabaya',
                price:'1.750.000',
                booking:'Bisa Booking',
                image:'https://blogpictures.99.co/D4-MPQUYAA1B7G.jpg',
                update:'12 August 2019',
                widthRoom:'5x3 m'
            }
        ]
    }    

render(){
    const { navigation } = this.props;
    const id = navigation.getParam('id');
    const gender = navigation.getParam('gender');
    const address = navigation.getParam('address');
    const description = navigation.getParam('description');
    const price = navigation.getParam('price');
    const booking = navigation.getParam('booking');
    const image = navigation.getParam('image');
    // const data = navigation.getParam('data',null);

    return(
    
    <ScrollView>
    <View>    
        
        <View style={{flex:1}}>
            <View>
            <View>
                <View style={{ borderWidth:1,borderColor:'white'}}>
                    <Image 
                    style={{height: 150}}
                    source={{uri: image}}/>
                </View>
            </View>
            
            <View >
                <View style={styles.menuCaseBlack}>
                    <View style={styles.case}><Text style={styles.whiteText}>Foto</Text></View>
                    <View style={styles.case}><Text style={styles.whiteText}>Peta</Text></View>
                    <View style={styles.case}><Text style={styles.whiteText}>360</Text></View>
                </View>
            </View>
            
            <View style={styles.page}>
                <View><Text style={styles.gender}>{gender}</Text></View>
                <View><Text style={styles.description}>{description}</Text></View>
                <View><Text style={styles.update} >Update </Text></View>
            </View>
            
            <View style={[styles.page,{marginBottom:40}]}>   
                <View style={styles.menuCaseWhite}>
                    <View style={styles.case}><Text>Tidak termasuk listrik</Text></View>
                    <View style={styles.case}><Text>Tidak ada min.bayar</Text></View>
                </View>
            </View>
            
            <View>
                <View style={styles.endPage} >
                    <Text style={[styles.textBold,{paddingBottom:10}]} >Luas kamar</Text>
                    <Text>widthRoom</Text>
                    <View style={{paddingTop:50,paddingBottom:20}} >
                    <View  style={styles.menuCaseWhite}>
                    <View style={[styles.case,{alignItems:'stretch'}]} ><Text style={{marginLeft:-10,fontWeight:'bold',fontSize:15}}>Fasilitas kost dan kamar</Text></View>
                    <View style={[styles.case,{alignItems:'center'}]}><Text style={{fontWeight:'bold',color:'green'}}>Lihat Semua</Text></View>
                     </View>  
                    </View>
                </View>
            </View>

            <View style={{flex:1,flexDirection:'row'}} >
                <View style={{flex:1}}>
                    <Text style={styles.price} >Rp. {price} / bulan </Text>
                    <Text style={{color:'green',fontSize:15}} >liha semua harga</Text>
                </View>   
                <View style={{flex:1,flexDirection:'row'}}>
                    <Button style={{flex:1,backgroundColor:'white',alignItems:'center',borderWidth:2,borderColor:'red'}}><Text style={{paddingRight:0}} >Hubungi Kost</Text></Button>
                    <Button style={{flex:1,backgroundColor:'orange',borderWidth:2,borderColor:'red'}}><Text style={{paddingLeft:20,color:'white'}} >Booking</Text></Button>
                </View>
            </View> 
    
            </View>
            
        </View>
     
    </View>

    
    </ScrollView>
      
)}}

const styles = StyleSheet.create({
price :{
    fontSize : 18
},
gender :{
    color:'pink'
},
textBold:{
    fontSize:20,
    fontWeight:'bold',
    paddingTop:5
},
description:{
    fontSize:25
},
button:{
    width:90,
    height:30,
    marginTop:10
},
update:{
    fontSize:10,
    marginBottom:20
},
menuCaseBlack:{
    backgroundColor:'black',
    flex:1,
    flexDirection:'row',
},
menuCaseWhite:{
    backgroundColor:'white',
    flex:1,
    flexDirection:'row',
},
case:{
    flex:1,
    padding:10,
    fontSize:20,
    alignItems:'center'
},
whiteText:{
    color:'white',
    fontSize:15
},
page:{
    paddingTop:20,
    borderBottomColor:'#ccc',
    borderWidth:0.3
},
endPage:{
    borderBottomColor:'#ccc',
    borderWidth:0.3,
}
})