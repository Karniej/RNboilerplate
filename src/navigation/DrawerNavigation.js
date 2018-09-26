import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import AppIcon from '../components/AppIcon/AppIcon'
// import { Icon } from '@netguru-team-m/liquid-design-react-native'
import DrawerStack from './DrawerStack'
import { colors, constants } from '../config'

const DrawerNavigation = createStackNavigator(
  {
    DrawerStack: { screen: DrawerStack }
  },
  {
    headerMode: 'none',
    navigationOptions: ({ navigation }) => {
      return {
        headerTintColor: colors.primaryColor,
        headerStyle: {
          backgroundColor: colors.secondaryColor
        },
        headerBackTitleVisible: false,
        gesturesEnabled: false,
        headerLeft: (
          <AppIcon
            name={Platform.OS === 'ios' ? 'ios-menu-outline' : 'md-menu'}
            size={30}
            color={colors.primaryColor}
            style={{ marginLeft: constants.defaultMargin }}
            onPress={() => {
              return navigation.navigate('DrawerToggle')
            }}
          />
        )
      }
    }
  }
)

export default DrawerNavigation
