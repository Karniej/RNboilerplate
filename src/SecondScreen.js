// @flow

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SecondScreen = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>Welcome to xx Screen</Text>
  </View>
);

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
