// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import Navigator from './navigator';

class AppNavigation extends Component<{ navigationState: any, dispatch: any }> {
  render() {
    const { navigationState, dispatch } = this.props;
    return <Navigator navigation={addNavigationHelpers({ dispatch, state: navigationState })} />;
  }
}

const mapStateToProps = state => ({
  navigationState: state.navReducer,
});

export default connect(mapStateToProps)(AppNavigation);
