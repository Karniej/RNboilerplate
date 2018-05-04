import React from 'react';
import { Text, View, Button } from 'react-native';
import NavigationActions from 'react-navigation/src/NavigationActions';
import PropTypes from 'prop-types';
import styles from './styles';

class ThirdScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'gold',
    },
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
ThirdScreen.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }).isRequired,
};
export default ThirdScreen;
