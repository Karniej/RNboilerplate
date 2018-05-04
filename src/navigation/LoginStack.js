import { StackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen/LoginScreen';

const LoginStack = StackNavigator(
  {
    LoginScreen: { screen: LoginScreen },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerBackTitle: null,
      headerStyle: { backgroundColor: '#00d664' },
      headerTintColor: 'white',
    },
  },
);
export default LoginStack;
