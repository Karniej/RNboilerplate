import { StackNavigator } from 'react-navigation'
import LoginScreen from '../screens/LoginScreen/LoginScreen'
import { colors } from '../config'

const LoginStack = StackNavigator(
  {
    LoginScreen: { screen: LoginScreen }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      title: 'Log In',
      headerBackTitle: null,
      headerStyle: { backgroundColor: colors.accentColor },
      headerTintColor: colors.secondaryColor
    }
  }
)
export default LoginStack
