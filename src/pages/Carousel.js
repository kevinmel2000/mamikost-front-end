    
import React, { Component } from 'react'
import {
   View,
   Text,
   Platform,
   StyleSheet
} from 'react-native'

import { BackgroundCarousel } from "./BackgroundCarousel"

// const images = [
//    "https://www.kotajogja.com/wp-content/uploads/2016/04/hotpromo6001122015103741.jpg",
//    "https://i.ytimg.com/vi/Q8RMSYyzC1s/maxresdefault.jpg",
//    "https://cdn2.tstatic.net/tribunnews/foto/bank/images/iklan-promo-traveloka.jpg",
//    "https://citraalam.id/wp-content/uploads/2018/10/iklan-promo-diskon-citra-alam-e1540021469475.jpeg"
// ];

export default class Carousel extends Component {

   constructor(props){
      super(props);
      this.state ={
         images:[
            "https://www.kotajogja.com/wp-content/uploads/2016/04/hotpromo6001122015103741.jpg",
            "https://i.ytimg.com/vi/Q8RMSYyzC1s/maxresdefault.jpg",
            "https://cdn2.tstatic.net/tribunnews/foto/bank/images/iklan-promo-traveloka.jpg",
            "https://citraalam.id/wp-content/uploads/2018/10/iklan-promo-diskon-citra-alam-e1540021469475.jpeg"         
         ]
      }
   }
   render() {
      return (
         <View style={{flex:1,padding:10}}>
            <BackgroundCarousel images={this.state.images} />
         </View>
      )
   }
}