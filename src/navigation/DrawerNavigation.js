import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Button } from 'react-native';
import DrawerStack from './DrawerStack';

const DrawerNavigation = StackNavigator(
  {
    DrawerStack: { screen: DrawerStack },
  },
  {
    headerMode: 'none',
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: '#4C3E54' },
      title: 'Welcome!',
      headerTintColor: 'white',
      gesturesEnabled: false,
      headerRight: <Button title="DR" onPress={() => navigation.navigate('DrawerToggle')} />,
    }),
  },
);

export default DrawerNavigation;
