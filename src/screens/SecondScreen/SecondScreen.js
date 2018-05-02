import React from 'react';
import { Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class SecondScreen extends React.Component {
  static navigationOptions = {
    title: 'Second',
    drawerLabel: 'Second',
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
SecondScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
};
export default SecondScreen;
