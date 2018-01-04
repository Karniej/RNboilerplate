// @flow

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class SecondScreen extends React.Component<{ navigation: any }> {
  static navigationOptions = {
    title: 'Second',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Second Screen</Text>
        <Button title="Third" onPress={() => navigate('Third')} />
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

export default SecondScreen;
