/**
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import HomeScreen from './src/HomeScreen';
import SecondScreen from './src/SecondScreen';

// const App = StackNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//       navigationOptions: {
//         title: 'Home',
//       },
//     },
//     Second: {
//       screen: SecondScreen,
//       navigationOptions: {
//         title: 'Second',
//       },
//     },
//   },
//   {
//     initialRouteName: 'Home',
//   },
// );

// const App = TabNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//       navigationOptions: {
//         tabBarLabel: 'Home',
//       },
//     },
//     Second: {
//       screen: SecondScreen,
//       navigationOptions: {
//         tabBarLabel: 'Second',
//       },
//     },
//   },
//   {
//     tabBarPosition: 'top',
//     animationEnabled: true,
//     tabBarOptions: {
//       activeTintColor: '#e91e63',
//       labelStyle: {
//         fontSize: 20,
//         bottom: 0,
//       },
//       tabStyle: {
//         width: 100,
//       },
//     },
//     initialRouteName: 'Home',
//   },
// );

const App = DrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
    },
  },
  Second: {
    screen: SecondScreen,
    navigationOptions: {
      title: 'Second',
    },
  },
});

export default App;
