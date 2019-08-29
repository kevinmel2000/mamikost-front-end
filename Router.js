import React, {Component} from 'react';
import {createSwitchNavigator,createBottomTabNavigator, createStackNavigator,createAppContainer, createMaterialTopTabNavigator} from 'react-navigation';
import Login1 from './src/login/Login';
import ViewDetail from './src/pages/ViewDetail';
// import Header from './src/header/header';
import HeaderIklan from './src/header/headerIklan'
import Iklan from './src/pages/Iklan'
import Ionicons from 'react-native-vector-icons/Ionicons';
import BeforeLogin from './src/pages/BeforeLogin'
import BlankHistory from './src/pages/BlankHistory'
import Chat from './src/pages/Chat'
import PopularCity from './src/pages/PopularCity'

import Tab1 from './src-latihan/components/TabScreens/Tab1'
import Tab2 from './src-latihan/components/TabScreens/Tab2'
import Tab3 from './src-latihan/components/TabScreens/Tab3'
import Tab4 from './src-latihan/components/TabScreens/Tab4'
import Explore from './src/pages/Explore'
import { View } from 'native-base';

// const _headerExplore = props =>{
//   return(
//     <View style={{flex:1}} >
//       <HeaderExplore navigation={props.navigation}/>
//     </View>
//   )
// }


const MenuWishlist = createMaterialTopTabNavigator(
  {
    Favorit: { screen: BeforeLogin },
    Dilihat: { screen: BlankHistory },
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#000',
      inactiveTintColor: '#2a2a2a',
      style: {
        backgroundColor: '#White',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 2,
      },
    },
  },
);

const Wishlist = createStackNavigator({
  TabScreen: {
    screen: MenuWishlist,
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'white',
        elevation: 0,
        shadowOpacity: 0
      },
      headerTintColor: '#000',
      title: 'Wishlist',
    },
  },
});


const Login = createStackNavigator({
  TabScreen: {
    screen: BeforeLogin,
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: '#000',
      title: 'Login',
    },
  },
});

const Main = createBottomTabNavigator({

  Explore:{
      screen: Explore
  },
  Wishlist:{
      screen: Wishlist
  },
  Chat:{
      screen: Chat,
      navigationOptions:{
          title: 'Chat'
      }
  },
  Login:{
    screen: Login,
    navigationOptions:{
        title: 'Login'
    }
}
},


{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent =Ionicons ;
      let iconName;
      if (routeName === 'Explore') {
        iconName = `ios-search`//`Search${focused ? '' : '-outline'}`;
        // Sometimes we want to add badges to some icons. 
        // You can check the implementation below.
        // IconComponent = Icon; 
      } else if (routeName === 'Wishlist') {
        iconName = `ios-heart`;
      } else if (routeName === 'Chat') {
        iconName = `ios-chatboxes`;
      } else if (routeName === 'Login') {
        iconName = `ios-person`;
      }

      // You can return any component that you like here!
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
    tabBarOptions:{
      activeTintColor:'green'
    },
  })
}

)

const PopularCities = createStackNavigator(
  {
    Home:Main,
    PopularCity : PopularCity,
    ViewDetail:ViewDetail
  },
  {
      defaultNavigationOptions:{
          header:null
      }
  }
)


const AuthStack = createStackNavigator(
  {
    LogIsRoute : Login1,
  },
  {
      defaultNavigationOptions:{
          title:'Login'
      }
  }
)

const AppStack = createStackNavigator(
  {
    Home : Main,
  },
  {
    defaultNavigationOptions:{
      header:null
    }
  }
)

export default createAppContainer(createSwitchNavigator(
  {
    AppStack: AppStack,
    AuthStack: AuthStack,
    PopularCities:PopularCities
  }
))

//end latihan



































// const TabNavigate = createBottomTabNavigator({
//   Home:{screen:Home},
// },
// {
// tabBarPosition:'bottom',
// animationEnabled: true,
// swipeEnabled:false,
// tabBarComponent : props =>{
//     return(
//         <FooterTab navigation={props.navigation}/>
//     )
// }
// });
// const footer = props =>{
//   return(
//       <FooterTab navigation={props.navigation}/>
//   )
// }
// const headerIklan = props =>{
//   return(
//     <HeaderIklan navigation={props.navigation}/>
//   )
// }


// const iklan = props =>{
//   return(
//     <Iklan navigation={props.navigation}/>
//   )
// }

// const id = props => {this.props.navigation.getParam(id)}
// const viewDetailId = props => {this.props.navigation.navigate('Detail',{id})}
// const dataKost = props => {this.props.navigation.navigate('data',{data:
//   [
//     {
//       id:1,
//       gender:'Putri',
//       address:'Jakarta-barat',
//       description:'Kost mamirooms jakarta',
//       price:'1.750.000',
//       booking:'Bisa Booking',
//       image:'https://rumahdijual.com/attachments/bandung/25804631d1531824574-sewa-kosan-di-jatinangor-murah-lengkap-photo_2018-07-17_14-58-13.jpg'
//       },
//       {
//       id:2,
//       gender:'Putri',
//       address:'Kost mamirooms yogyakarta',
//       description:'Kost mamirooms yogyakrata',
//       price:'1.750.000',
//       booking:'Bisa Booking',
//       image:'https://pbs.twimg.com/media/Bpw8n3JCMAAZwim.jpg'
//       }
//   ]
// })}
