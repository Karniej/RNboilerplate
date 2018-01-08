// @flow

import { StackNavigator } from 'react-navigation';
import DrawerStack from './DrawerStack';

const DrawerNavigation = StackNavigator(
  {
    drawerStack: { screen: DrawerStack },
  },
  {
    headerMode: 'none',
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: '#4C3E54' },
      title: 'Welcome!',
      headerTintColor: 'white',
    }),
  },
);

export default DrawerNavigation;
