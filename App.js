import React from 'react';
import { StyleSheet,Dimensions } from 'react-native';
import {createAppContainer,createSwitchNavigator,} from 'react-navigation';
import {createStackNavigator}from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import RegisterScreen from './screens/RegisterScreen';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import EditProfileScreem from './screens/EditProfileScreen';


const windowWidth = Dimensions.get("window").width;

const AppStack= createMaterialTopTabNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen 

  },
  {  
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor:'white',  
        showIcon:false,
        showLabel:true,  
        style: {  
            backgroundColor:'#004E96'  
        },
        labelStyle: {
          fontSize: 14,
          color:'white'
        },
        tabStyle: {
          marginTop:20,
          alignItems:'center',
          flexDirection:'row',
          felx:1,
          width:windowWidth/2,
          height:60
        }  
    }
  }
);

const AuthStack = createStackNavigator(
  {
    Login: {
      screen:LoginScreen,
      navigationOptions:{
        headerShown:false
      }
    }
  ,
    Register:{
      screen:RegisterScreen,
      navigationOptions:{
        headerShown:false
      }
    }
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading:LoadingScreen,
      App:AppStack,
      Auth: AuthStack,
      Edit:EditProfileScreem 
      
    },
    {
      initialRouteName:'Loading'
    }
  )
);