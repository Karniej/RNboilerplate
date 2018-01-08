// @flow
import { StackNavigator } from 'react-navigation';
import LoginStack from './LoginStack';
import DrawerNavigation from './DrawerNavigation';

const navigator = StackNavigator({
  loginStack: {
    screen: LoginStack,
  },
  drawerStack: {
    screen: DrawerNavigation,
  },
});

export default navigator;
