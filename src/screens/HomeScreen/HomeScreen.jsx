import * as React from 'react';
import { Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class HomeScreen extends React.Component {
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

HomeScreen.propTypes = {
  navigation: PropTypes.func.isRequired,
};

export default HomeScreen;
