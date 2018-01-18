// @flow

import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

type Props = {
  navigation: any,
};

class HomeScreen extends React.Component<Props> {
  static navigationOptions = {
    title: 'Home',
    drawerLabel: 'Home',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Home Screen</Text>
        <Button testID="second" title="Goto Second" onPress={() => navigate('Second')} />
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
