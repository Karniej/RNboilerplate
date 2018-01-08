// @flow

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

type Props = {
  navigation: any,
};
class ThirdScreen extends React.Component<Props> {
  static navigationOptions = {
    title: 'Third',
    drawerLabel: 'Third',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Third Screen</Text>
        <Button title="Back Home" onPress={() => navigate('Home')} />
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