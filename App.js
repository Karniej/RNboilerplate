/**
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/HomeScreen';
import SecondScreen from './src/SecondScreen';

const App = StackNavigator(
  {
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
      First: {
        screen: App,
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);
export default App;
