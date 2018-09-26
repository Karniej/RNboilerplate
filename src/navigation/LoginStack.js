import { createStackNavigator } from 'react-navigation'
import LoginScreen from '../screens/LoginScreen/LoginScreen'
import { colors } from '../config'

const LoginStack = createStackNavigator(
  {
    LoginScreen: { screen: LoginScreen }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      title: 'Log In',
      // headerBackTitle: false,
      headerStyle: { backgroundColor: colors.accentColor },
      headerTintColor: colors.secondaryColor,
      headerBackTitleVisible: false
    }
  }
)
export default LoginStack
