import React from 'react'
import { Platform } from 'react-native'
import { StackNavigator } from 'react-navigation'
import DrawerStack from './DrawerStack'
import { colors } from '../config'
import AppIcon from '../components/AppIcon/AppIcon'

const DrawerNavigation = StackNavigator(
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
        gesturesEnabled: false,
        headerLeft: (
          <AppIcon
            name={Platform.OS === 'ios' ? 'ios-menu-outline' : 'md-menu'}
            size={30}
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
