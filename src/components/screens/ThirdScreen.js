// @flow

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class ThirdScreen extends React.Component<{ navigation: any }> {
  static navigationOptions = {
    title: 'Third',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Third Screen</Text>
        <Button title="Second" onPress={() => navigate('Second')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'violet',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default ThirdScreen;
