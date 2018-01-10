import LoginScreen from '../components/screens/LoginScreen';
import { StackNavigator } from 'react-navigation';

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
      headerStyle: { backgroundColor: '#E73536' },
      title: 'You are not logged in',
      headerTintColor: 'white',
    },
  },
);
export default LoginStack;
