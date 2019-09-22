    
import React, { Component } from 'react'
import {
   View,
   Text,
   StyleSheet,
   TouchableOpacity
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux'

import ListKost from './ListKost'
import ViewMaps from './ViewMaps'

class PopularCity extends Component {
   constructor(props){
       super(props);
       this.state={
           menu:'peta',
           menuAktif:stylePopularCity.backgroundAktif,
       }
   }
   render() {
    const propsLatitude = this.props.navigation.getParam('latitude','tidak ada')
    const propsLongitude = this.props.navigation.getParam('longitude', 0)
    const city = this.props.navigation.getParam('city')
      return (
         <View style={stylePopularCity.container}>
             <View style={stylePopularCity.containerSearch}>
                 <View style={stylePopularCity.search} >
                    <TouchableOpacity style={stylePopularCity.back} onPress={()=>{
                        this.props.navigation.navigate('Home')
                    }} >
                      <Ionicons name='ios-arrow-dropleft-circle' size={35} color='green' />
                    </TouchableOpacity>
                    <View style={stylePopularCity.valueSearch}>
                        <Text>{city}</Text>
                    </View>
                </View>
                 <View style={stylePopularCity.popularCity} ></View>
            </View>
             <View style={stylePopularCity.containerMenu}>
                 <TouchableOpacity style={this.state.menu == 'peta'?stylePopularCity.backgroundAktif :stylePopularCity.menu}
                 onPress={()=>{
                     this.setState({
                         menu:'peta'
                     })
                 }} >
                     <Text>Lihat Peta</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={this.state.menu == 'daftar'?stylePopularCity.backgroundAktif :stylePopularCity.menu}
                 onPress={()=>{
                     this.setState({
                         menu:'daftar'
                     })
                 }} >
                    <Text>Lihat Daftar</Text>
                 </TouchableOpacity>
            </View>
            <View style={stylePopularCity.content} >
                 {this.state.menu=='daftar'?
                    <ListKost key="lihatDaftar" navigate={this.props.navigation.navigate} />
                 :<ViewMaps key="ViewMaps" dataMarker={this.props.rentlist.data} city={city} latitude={propsLatitude} longitude={propsLongitude} navigate={this.props.navigation.navigate} />}
            </View>
         </View>
      )
   }
}

const mapStateToProps = state => {
    return {
        rentlist: state.rentlist
    }
}
export default connect(mapStateToProps)(PopularCity)

const stylePopularCity = StyleSheet.create({
    container:{
        flex:1,
    },
    containerSearch:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    search:{
        width:'90%',
        height:'80%',
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'#ddd'
    },
    back:{
        flex:2,
        justifyContent:'center',
        paddingLeft:10
    },
    valueSearch:{
        flex:9,
        justifyContent:'center',
        paddingLeft:10
    },
    containerMenu:{
        flex:1,
        flexDirection:'row',
        
    },
    menu:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'center',
    },
    content:{
        flex:8,
    },
    backgroundAktif:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'center',
        borderBottomColor:'green',
        borderBottomWidth:1
    }
})