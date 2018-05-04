import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
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
        <TouchableOpacity testID="logIn" onPress={() => navigate('DrawerStack')}>
          <Text style={{ fontSize: 18, color: '#00d664' }}>Log In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
LoginScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
};

export default LoginScreen;
