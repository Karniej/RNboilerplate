import React from 'react';
import { Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View testID="loginScreen" style={styles.container}>
        <Text style={styles.welcome}>This is LoginScreen</Text>
        <Button testID="logIn" title="Log In" onPress={() => navigate('DrawerStack')} />
      </View>
    );
  }
}
LoginScreen.propTypes = {
  navigation: PropTypes.func.isRequired,
};

export default LoginScreen;
