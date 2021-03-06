import { StackNavigator } from 'react-navigation'
import { Animated, Easing } from 'react-native'
import LoginStack from './LoginStack'
import DrawerNavigation from './DrawerNavigation'

const noTransitionConfig = () => {
  return {
    transitionSpec: {
      duration: 0,
      timing: Animated.timing,
      easing: Easing.step0
    }
  }
}

const Navigator = StackNavigator(
  {
    LoginStack: {
      screen: LoginStack
    },
    DrawerStack: {
      screen: DrawerNavigation
    }
  },
  {
    initialRouteName: 'LoginStack',
    transitionConfig: noTransitionConfig
  }
)

export default Navigator
