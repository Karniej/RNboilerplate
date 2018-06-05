import React from 'react'
import { DrawerNavigator, DrawerItems } from 'react-navigation'
import { ScrollView, SafeAreaView } from 'react-native'
import drawerScreens from './drawerScreens'
import { colors, constants } from '../config'
import styles from './styles'

const { container } = styles
const CustomDrawer = (props) => {
  return (
    <ScrollView
      style={container}
    >
      <SafeAreaView
        forceInset={{ top: 'always', horizontal: 'never' }}
      >
        <DrawerItems
          {...props}
        />
      </SafeAreaView>
    </ScrollView>
  )
}

const DrawerStack = DrawerNavigator(drawerScreens, {
  drawerWidth: constants.drawerWidth,
  contentComponent: CustomDrawer,
  drawerBackgroundColor: colors.accentColor,
  contentOptions: {
    activeTintColor: colors.primaryColor
  }
})
export default DrawerStack
