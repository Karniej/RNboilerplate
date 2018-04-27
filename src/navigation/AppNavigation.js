import React from 'react';
import { connect } from 'react-redux';
import * as ReactNavigation from 'react-navigation';
import PropTypes from 'prop-types';
import Navigator from './navigator';

const AppNavigation = ({ navigationState, dispatch }) => {
  const navigation = ReactNavigation.addNavigationHelpers({
    dispatch,
    state: navigationState,
  });
  return <Navigator navigation={navigation} />;
};
AppNavigation.propTypes = {
  navigationState: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  navigationState: state.nav,
});

export default connect(mapStateToProps)(AppNavigation);
