import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    drawerLabel: 'Home',
    headerStyle: {
      backgroundColor: 'black',
    },
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.welcome}>Netguru React Native Boilerplate</Text>
        <TouchableOpacity testID="second" title="Goto Second" onPress={() => navigate('Second')}>
          <Text style={{ fontSize: 18, color: '#00d664' }}>Goto Second</Text>
        </TouchableOpacity>
        <View style={styles.container}>
          <View style={[styles.subContainer, { backgroundColor: '#00d664' }]}>
            <Text style={[styles.textStyle, { color: 'black' }]} />
          </View>
          <View style={[styles.subContainer, { backgroundColor: 'black' }]}>
            <Text style={[styles.textStyle, { color: 'white' }]} />
          </View>
        </View>
      </View>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired,
};

export default HomeScreen;
