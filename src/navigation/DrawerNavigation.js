import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { StackNavigator } from 'react-navigation'
import DrawerStack from './DrawerStack'
import { colors, constants } from '../config'

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
          <Icon
            name='md-menu'
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
