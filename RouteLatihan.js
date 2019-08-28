import React from 'react'
import {
    createAppContainer,
    createStackNavigator,
    createDrawerNavigator,
    createSwitchNavigator,
    createBottomTabNavigator,
    createMaterialTopTabNavigator
} 
from 'react-navigation'

import {Image,TouchableOpacity} from 'react-native'
import {Icon} from 'native-base';

import Login from './src-latihan/components/Auth/Login'
import Detail from './src-latihan/components/Detail'
import Feed from './src-latihan/components/Feed'
import Screen1 from './src-latihan/components/DrawerScreens/Screen1'
import Screen2 from './src-latihan/components/DrawerScreens/Screen2'
import Screen3 from './src-latihan/components/DrawerScreens/Screen3'
import Tab1 from './src-latihan/components/TabScreens/Tab1'
import Tab2 from './src-latihan/components/TabScreens/Tab2'
import Tab3 from './src-latihan/components/TabScreens/Tab3'


import menuIcon from './assets/img/menu.png'

  const AuthStack = createStackNavigator(
    {
      LogIsRoute : Login
    },
    {
        defaultNavigationOptions:{
            header:null
        }
    }
  )

const TabItems = createBottomTabNavigator({
    FirstTab:{
        screen: Tab1,
        navigationOptions:{
            title: 'Tab1'
        }
    },
    SecondTab:{
        screen: Tab2,
        navigationOptions:{
            title: 'Tab2'
        }
    },
    ThirdTab:{
        screen: Tab3,
        navigationOptions:{
            title: 'Tab3'
        }
    }
},
    {
    navigationOptions:({navigation})=>({
        headerStyle:{backgroundColor: 'green'},
        title:'Menus',
        headerTintColor:'white'
    })
    }
)

const Draweritems = createDrawerNavigator({
    Home:{
      screen:Feed
    },
    Contacts:{
      screen:Screen1
    },
    Recipes:{
      screen:Screen2
    },
    Settings:{
      screen:Screen3
    }
  })
  
 
const DrawerStackNavigator = createStackNavigator(
    {
        DrawerRoute:{
            screen:Draweritems
        }
    },
    {
    defaultNavigationOptions:({navigation}) => ({
            headerStyle:{backgroundColor: 'red'},
            title:navigation.state.routes[navigation.state.index].routeName,
            headerTintColor:'green',
            headerLeft:(
                <TouchableOpacity onPress={()=> navigation.toggleDrawer()} >
                    <Image 
                    source={menuIcon}
                    styles={{marginLeft:8,
                    tintColor:'white'}} />
                    {/* <Icon name='menu'
                    styles={{marginLeft:8,tintColor:'white'}}
                   /> */}
                </TouchableOpacity>
            )
        })
    }
) 


const AppStack = createStackNavigator(
    {
      DrawerRoute:{
          screen:DrawerStackNavigator,
          navigationOptions:({
            header:null
          })
      },
      DetailRoute: {
          screen: Detail,
          navigationOptions:()=>({
            headerStyle:{backgroundColor: 'green'},
            title:'Detail',
            headerTintColor:'white'
          })
      },
      TabRoute:TabItems
    }
  )
  

  export default createAppContainer(createSwitchNavigator(
    {
      AuthStack: AuthStack,
      App: AppStack
    }
  ))