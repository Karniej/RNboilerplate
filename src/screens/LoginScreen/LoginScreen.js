// @flow

import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

type Props = {
  navigation: any,
};

class LoginScreen extends React.Component<Props> {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
export default LoginScreen;
