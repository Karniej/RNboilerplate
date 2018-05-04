import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import NavigationActions from 'react-navigation/src/NavigationActions';
import PropTypes from 'prop-types';
import styles from './styles';

class ThirdScreen extends React.Component {
  static navigationOptions = {
    title: 'Third',
    drawerLabel: 'Third',
    headerStyle: {
      backgroundColor: 'black',
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Third Screen</Text>
        <TouchableOpacity
          testID="logout"
          onPress={() =>
            this.props.navigation.dispatch(NavigationActions.reset({
                index: 0,
                key: null,
                actions: [NavigationActions.navigate({ routeName: 'LoginStack' })],
              }))
          }
        >
          <Text style={{ fontSize: 18, color: '#00d664' }}>Logout</Text>
        </TouchableOpacity>
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
