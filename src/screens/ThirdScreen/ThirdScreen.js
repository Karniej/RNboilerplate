// @flow

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import NavigationActions from 'react-navigation/src/NavigationActions';

type Props = {
  navigation: any,
};
class ThirdScreen extends React.Component<Props> {
  static navigationOptions = {
    title: 'Third',
    drawerLabel: 'Third',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Third Screen</Text>
        <Button
          testID="logout"
          title="Back Home"
          onPress={() =>
            this.props.navigation.dispatch(NavigationActions.reset({
                index: 0,
                key: null,
                actions: [NavigationActions.navigate({ routeName: 'LoginStack' })],
              }))
          }
        />
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
