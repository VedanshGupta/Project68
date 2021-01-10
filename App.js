import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Facebook from './screens/fb';
import Instagram from './screens/in';

export default class App extends Component {
  render(){
    return <AppContainer2 />
  }
}

const TabNavigater = createBottomTabNavigator({
  Facebook: {screen:Facebook},
  Instagram: {screen:Instagram},
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({})=>{
      const routeName = navigation.state.routeName;
    }
  })
});

const AppContainer2 = createAppContainer(TabNavigater);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
