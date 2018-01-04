// @flow

import { StackNavigator } from 'react-navigation';
import HomeScreen from '../components/screens/HomeScreen';
import SecondScreen from '../components/screens/SecondScreen';
import ThirdScreen from '../components/screens/ThirdScreen';

const navigator = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Second: {
    screen: SecondScreen,
  },
  Third: {
    screen: ThirdScreen,
  },
});

export default navigator;
