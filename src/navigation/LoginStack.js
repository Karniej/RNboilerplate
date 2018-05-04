import { StackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen/LoginScreen';

const LoginStack = StackNavigator(
  {
    LoginScreen: { screen: LoginScreen },
    // signupScreen: { screen: SignupScreen },
    // forgottenPasswordScreen: {
    //   screen: ForgottenPasswordScreen,
    //   navigationOptions: { title: 'Forgot Password' },
    // },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerBackTitle: null,
      headerStyle: { backgroundColor: 'brown' },
      title: 'You are not logged in',
      headerTintColor: 'white',
    },
  },
);
export default LoginStack;
