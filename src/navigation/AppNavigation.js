// @flow

import React, { Component } from 'react';
import View from 'react-native';
import { connect } from 'react-redux';
import * as ReactNavigation from 'react-navigation';
import Navigator from './navigator';

type Props = {
  navigationState: mixed,
  dispatch: Object,
};
class AppNavigation extends Component<Props> {
  render() {
    const { navigationState, dispatch } = this.props;
    const navigation = ReactNavigation.addNavigationHelpers({
      dispatch,
      state: navigationState,
    });
    return <Navigator navigation={navigation} />;
  }
}

const mapStateToProps = state => ({
  navigationState: state.nav,
});

export default connect(mapStateToProps)(AppNavigation);
