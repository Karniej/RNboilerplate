import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class SecondScreen extends React.Component {
  static navigationOptions = {
    title: 'Second',
    drawerLabel: 'Second',
    headerStyle: {
      backgroundColor: 'black',
    },
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Second Screen</Text>
        <TouchableOpacity title="Third" onPress={() => navigate('Third')}>
          <Text style={{ fontSize: 18, color: '#00d664' }}>Goto Third</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
SecondScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
};
export default SecondScreen;
