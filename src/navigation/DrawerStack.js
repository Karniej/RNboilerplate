import React from 'react';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { ScrollView, SafeAreaView } from 'react-native';
import screens from './screens';

const CustomDrawer = props => (
  <ScrollView style={{ flex: 1 }}>
    <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const DrawerStack = DrawerNavigator(screens, {
  drawerWidth: 245,
  contentComponent: CustomDrawer,
  drawerBackgroundColor: '#00d664',
  contentOptions: {
    activeTintColor: 'white',
  },
});
export default DrawerStack;
