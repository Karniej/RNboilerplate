import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
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
      headerLeft: (
        <Icon
          testID="DR"
          name="md-menu"
          size={30}
          color="white"
          style={{ marginLeft: 10 }}
          onPress={() => navigation.navigate('DrawerToggle')}
        />
      ),
    }),
  },
);

export default DrawerNavigation;
