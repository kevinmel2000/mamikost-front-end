// import React, { Component } from 'react';
// import {View,Text,Button,StyleSheet,TouchableOpacity} from 'react-native'
// import {SearchBar,Header} from 'react-native-elements'
// import {Container, Left, Body, Right,  Icon, Title } from 'native-base';

// export default class HeaderExplore extends Component {
//   render() {
    
//     return (
//       <View style={{height:80}} >  
//         <Header
//         style={{shadowOpacity: 0,elevation: 0}}
//         containerStyle={{height:40,backgroundColor:'lightgreen'}}
//         leftComponent={{ icon: 'menu', color: '#fff' }}
//         centerComponent={{ text: 'YUK NGEKOS', style: { color: '#fff' } }}
//         rightComponent={{ icon: 'home', color: '#fff' }} />
        
//         <View style={{flex:1,flexDirection:'row',marginTop:-1,backgroundColor:'lightgreen',height:50}} >
//             <View style={styles.menuKecil} >
//                 <Text style={styles.textMenu} >Kost</Text>
//             </View>      
//             <View style={styles.menu} >
//                 <Text style={styles.textMenu} >Apartment</Text>
//             </View>      
//             <View style={styles.menu} >
//                 <Text style={styles.textMenu} >Barang dan Jasa</Text>
//             </View>      
//             <View style={styles.menu} >
//                 <Text style={styles.textMenu} >Lowongan Kerja</Text>
//             </View>      
//         </View>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//     textMenu:{
//         fontSize:13,
//         color:'white',
//         textAlign:'center'
//     },
//     menu:{
//         fontSize:15,
//         flex:1,
//         paddingTop:20
//     },
//     menuKecil:{
//         fontSize:15,
//         flex:0.3,
//         paddingTop:20,
//         borderBottomColor:'white',
//         borderBottomWidth:2
//     }
// })

import React, { Component } from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native'
import {Icon} from 'native-base'
import Ic from 'react-native-vector-icons/FontAwesome'
import { ScrollView } from 'react-native-gesture-handler';
import Explore from '../pages/Explore'

class Coba extends Component{
    render(){
        return(
            <ScrollView>
                <View style={style.content2} >
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>100</Text>
                </View> 
                </ScrollView>
        )
    }
}


export default class HeaderExplore extends Component{
    constructor(props){
        super(props);

        this.state={
            nav:'Kost',

            styleKost:style.backgroundAktif,
            styleApartment:'',
            styleBarangJasa:'',
            styleLoker:'',
        }
    }
    render(){
        return(
            <View >
            <View style={style.header} >
                <View style={style.headerOne} >
                    <View style={style.containerIconKoststyle} ><Image style={style.iconKost} source={require('../../assets/img/icon-kost.png')}/></View>
                    <View  style={style.title}><Text>yukngekos.com</Text></View>        
                </View>
                <View style={style.headerTwo} >
                    <TouchableOpacity style={style.containerIconKost} 
                    onPress={()=>
                        {
                            this.setState({
                                nav:'Kost',                    
                                
                                
                                styleKost:style.backgroundAktif,
                                styleApartment:'',
                                styleBarangJasa:'',
                                styleLoker:'',
                            })
                            }
                            
                    }>
                        <View style={[style.containerIconMenu,this.state.styleKost]} ><Image style={style.iconMenu} source={require('../../assets/img/kost.png')} /><Text>{
                            this.state.nav== 'Kost' ? this.state.nav :null
                        }</Text></View>
                    </TouchableOpacity>
                     
                    <TouchableOpacity style={style.containerIconKost} onPress={()=>{
                            this.setState({
                                nav :'Apartment',

                                
                                styleKost:'',
                                styleApartment:style.backgroundAktif,
                                styleBarangJasa:'',
                                styleLoker:'',
                            })
                    }}>   
                         <View style={[style.containerIconMen,this.state.styleApartment]}><Image style={style.iconMenu} source={require('../../assets/img/apartment.png')} /><Text>{this.state.nav== 'Apartment' ? this.state.nav :null}</Text></View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={style.containerIconKost} 
                    onPress={
                        ()=>{
                            this.setState({
                                nav : 'Barang & Jasa',

                                
                                styleKost:'',
                                styleApartment:'',
                                styleBarangJasa:style.backgroundAktif,
                                styleLoker:'',
                            })
                            this.props.navigation.navigate('Main',{data: 'abcdefgh'})
                            
                    }
                    }>
                        <View style={[style.containerIconMen,this.state.styleBarangJasa]}><Image style={style.iconMenu} source={require('../../assets/img/barang&jasa.jpg')} /><Text>{this.state.nav== 'Barang & Jasa' ? this.state.nav :null}</Text></View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={style.containerIconKost} onPress={()=>{
                            this.setState({
                                nav: 'Lowongan Kerja',

                                styleKost:'',
                                styleApartment:'',
                                styleBarangJasa:'',
                                styleLoker:style.backgroundAktif,
                            })
                    }}>
                      <View style={[style.containerIconMen,this.state.styleLoker]}><Image style={style.iconMenu} source={require('../../assets/img/loker.png')} /><Text>{this.state.nav== 'Lowongan Kerja' ? this.state.nav :null}</Text></View>
                    </TouchableOpacity> 
                </View>
            </View>
            
            <View style={style.content} >
                <View style={style.content1}>
                    <Text>Hai,
                    {/* {"\n"}  */}
                    </Text>
                    <Text style={style.searchText}> mau cari {this.state.nav} dimana? 
                    </Text>
                    <TouchableOpacity style={style.search} >
                        <View style={style.searchButton} >
                            <Ic name="search" style={{color:'#bbb',padding:3,marginLeft:3}} /> 
                            <Text style={{color:'#bbb'}} >Masukan alamat atau nama tempat</Text> 
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
            
        )
    }
}


const style = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    },
    content:{
        flexDirection:'column',
        zIndex:1
    },
    content1:{
        paddingLeft:10,
        paddingRight:10,
        borderBottomColor:'#ddd',
        borderBottomWidth:5,
        height:100
    
    },
    content2:{
        flex:1,
        backgroundColor:'green'
    },
    searchText:{
        marginLeft:-5,
        fontSize:20,
        fontWeight:'bold'
    },
    search:{
        marginTop:5
    },
    searchButton:{
        backgroundColor:'#ddd',
        height:30,
        borderRadius:20,
        flexDirection:'row',
        paddingTop:5,
        textDecorationColor:'#ccc'
    },
    backgroundAktif:{
        backgroundColor:'#ccc',
        flexDirection:'row',
        borderRadius:20
    },

    containerIconKost:{
        flex:1,
        alignItems:'center',
        
    },
    iconKost:{
        height:50,
        width:50
    },
    
    containerIconMenu:{
        flexDirection:'row',
    },

    iconMenu:{
        height:20,
        width:20
    },
    title:{
        paddingTop:10,
        flex:7,
    },
    header:{
        height:80,
        flexDirection:'column',
        position:'relative',
        zIndex:999
    },
    headerOne:{
        flex:1,
        flexDirection:'row',
    },
    headerTwo:{
        flex:1,
        flexDirection:'row',
        marginTop:10
    },

})

//    const data = this.props.navigation.getParam('data')