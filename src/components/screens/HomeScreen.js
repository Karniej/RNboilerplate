// @flow

import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

class HomeScreen extends React.Component<{ navigation: any }> {
  static navigationOptions = {
    tabBarLabel: 'Home',
    title: 'Home',
  };

  navigate = () => {
    const navigateToSecondScreen = NavigationActions.navigate({
      routeName: 'Second',
    });
    this.props.navigation.dispatch(navigateToSecondScreen);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Home Screen</Text>
        <Button title="Goto Second" onPress={() => this.navigate()} />
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
export default HomeScreen;
