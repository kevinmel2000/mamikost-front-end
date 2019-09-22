import React, { Component } from 'react';
import {View,Text,ScrollView,StyleSheet,TouchableOpacity,Image,ImageBackground} from 'react-native'
import Ic from 'react-native-vector-icons/FontAwesome'
import style from './style'
import Carousel from './Carousel'
import {connect} from 'react-redux'
import * as rentlist from '../_actions/rentlist'
import AsyncStorage from '@react-native-community/async-storage'


class Explore extends Component{
    constructor(props){
        super(props);

        this.state={
            nav:'Kost',
            styleMenuAktif:style.backgroundMenuAktif,
            users:[{
                name:'refan'
            }],
            obj:[]
        }
        // this.handleOnNavigateBack = this.handleOnNavigateBack.bind(this)
    }
    
    // componentDidMount(){
    //     Axios.get(`http://192.168.0.13:3000/api/v1/users`)
    //     .then(res => {
    //       const users = res.data;
    //       console.log(users);
    //       this.setState({ users });
    //     })
    // }
    render(){
        const town = 'jakarta'
        return(
            <View style={style.container} >
                <View style={style.header} >

                    <View style={style.containerIconMenu}>
                        <View style={style.containerIconHeader} ><Image style={style.iconHeader} source={require('../../assets/img/icon-kost.png')}/></View>
                        <View style={style.title}><Text>yukngekos.com</Text></View>
                    </View>

                    <View style={style.centerHeader} >
                    <TouchableOpacity style={style.containerMenu} 
                      onPress={()=>
                           {
                            this.setState({
                                nav:'Kost',                    
                            })
                            }}>
                       <View style={this.state.nav=='Kost'?this.state.styleMenuAktif:style.containerIconMenu} >
                       <Image style={style.iconMenu} source={require('../../assets/img/kost.png')} /><Text>{
                            this.state.nav== 'Kost' ? this.state.nav :null
                        }</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.containerMenu} onPress={()=>{
                            this.setState({
                                nav :'Apartment'
                            })
                    }}>   
                         <View style={[style.containerIconMenu,(this.state.nav=='Apartment'?this.state.styleMenuAktif:null)]}><Image style={style.iconMenu} source={require('../../assets/img/apartment.png')} /><Text>{this.state.nav== 'Apartment' ? this.state.nav :null}</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.containerMenu} 
                    onPress={
                        ()=>{
                            this.setState({
                                nav : 'Barang & Jasa',
                            })
                            this.props.navigation.navigate('Main',{data: 'abcdefgh'})
                            
                    }
                    }>
                        <View style={[style.containerIconMenu,(this.state.nav=='Barang & Jasa'?this.state.styleMenuAktif:null)]}><Image style={style.iconMenu} source={require('../../assets/img/barang&jasa.jpg')} /><Text>{this.state.nav== 'Barang & Jasa' ? this.state.nav :null}</Text></View>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.containerMenu} onPress={()=>{
                            this.setState({
                                nav: 'Lowongan Kerja',

                                styleKost:'',
                                styleApartment:'',
                                styleBarangJasa:'',
                                styleLoker:style.backgroundAktif,
                            })
                    }}>
                      <View style={[style.containerIconMenu,(this.state.nav=='Lowongan Kerja'?this.state.styleMenuAktif:null)]}><Image style={style.iconMenu} source={require('../../assets/img/loker.png')} /><Text>{this.state.nav== 'Lowongan Kerja' ? this.state.nav :null}</Text></View>
                    </TouchableOpacity> 

                    </View>
                </View>  
                <ScrollView style={{flex:1}} >
                <View style={style.content} >
                <View style={style.topContent}>
                    <Text>Hai,
                    {/* {"\n"}  */}
                    </Text>
                    <Text style={style.searchText}> mau cari {this.state.nav} dimana? 
                    </Text>
                    <TouchableOpacity style={style.search} 
                     onPress={()=>{
                        this.props.navigation.navigate('LogIsRoute',{data: 'abcdefgh'})
                     }}
                    >
                        <View style={style.searchButton} >
                            <Ic name="search" style={{color:'#bbb',padding:3,marginLeft:3}} /> 
                            <Text style={{color:'#bbb'}} >Masukan alamat atau nama tempat</Text> 
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={style.centerContent} >
                  <Text style={style.textContent} >Promo</Text>
                  <View style={style.promo} >
                    {this.state.Carousel =true ? 
                    <Carousel/>
                    :null}
                  </View>
                  <View style={style.containerMenuLogin} >
                      <View style={style.leftMenuLogin} >
                        <Text style={{color:'white'}} >Anda pemilik Kost?</Text>
                        <Text style={{color:'white'}} >Masuk atau daftar disini</Text>
                      </View>
                      <View style={style.rightMenuLogin} >
                        <TouchableOpacity style={{color:'white',borderWidth:2,borderColor:'white'}} >
                            <Text style={{color:'white',padding:2}} >Login</Text>
                        </TouchableOpacity>
                      </View>
                  </View>
                  
                  <Text style={style.textContent} >Kota Populer</Text>
                  <ScrollView horizontal={true}>
                  <View style={style.containerImagePopularcity} >
                      <TouchableOpacity onPress={()=>{
                        this.props.getRentlistTown('Jakarta'),
                        this.props.navigation.navigate('PopularCity',{city:'Jakarta',latitude:-6.207417,longitude:106.842567})
                      }} >
                      <ImageBackground source={require('../../assets/img/jakarta.jpg')} imageStyle={{ borderRadius: 20 }} style={style.imagePopularCity} >
                          <Text style={{color:'white'}} >Jakarta</Text>
                      </ImageBackground>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=>{
                          this.props.navigation.navigate('PopularCity',{city:'Surabaya',latitude:-7.2754438,longitude:112.6426425})
                      }} >
                      <ImageBackground source={require('../../assets/img/surabaya.jpg')} imageStyle={{ borderRadius: 20 }} style={style.imagePopularCity} >
                          <Text style={{color:'white'}} >Surabaya</Text>
                      </ImageBackground>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=>{
                          this.props.navigation.navigate('PopularCity',{city:'Palembang',latitude:-2.9547949,longitude:104.6929233})
                      }} >
                      <ImageBackground source={require('../../assets/img/palembang.jpg')} imageStyle={{ borderRadius: 20 }} style={style.imagePopularCity} >
                          <Text style={{color:'white'}} >Palembang</Text>
                      </ImageBackground>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=>{
                          this.props.navigation.navigate('PopularCity',{city:'Yogyakarta',latitude:-7.803164,longitude:110.3398252})
                      }} >
                      <ImageBackground source={require('../../assets/img/yogyakarta.jpg')} imageStyle={{ borderRadius: 20 }} style={style.imagePopularCity} >
                          <Text style={{color:'white'}} >Yogyakarta</Text>
                      </ImageBackground>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=>{
                          this.props.navigation.navigate('PopularCity',{city:'Bandung',latitude:-6.9032739,longitude:107.5731163}),
                          this.props.getRentlistTown('Bandung')
                      }} >
                      <ImageBackground source={require('../../assets/img/bandung.jpg')} imageStyle={{ borderRadius: 20 }} style={style.imagePopularCity} >
                          <Text style={{color:'white'}} >Bandung</Text>
                      </ImageBackground>
                      </TouchableOpacity>
                  </View>
                  </ScrollView>
                </View>
                </View>
                </ScrollView>
            </View>
            
        )
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        getRentlistTown: (town) => dispatch(rentlist.get_rentlist_town(town))
    }
}
export default connect(null, mapDispatchtoProps)(Explore)


//    const data = this.props.navigation.getParam('data')