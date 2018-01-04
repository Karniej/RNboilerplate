// @flow

import { StackNavigator } from 'react-navigation';
import HomeScreen from '../components/screens/HomeScreen';
import SecondScreen from '../components/screens/SecondScreen';

const navigator = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Second: {
    screen: SecondScreen,
  },
});

export default navigator;
