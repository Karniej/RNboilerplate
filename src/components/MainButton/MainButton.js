import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import NavigationActions from 'react-navigation/src/NavigationActions'
import PropTypes from 'prop-types'

import styles from './styles'

const { textStyle } = styles

class MainButton extends React.Component {
  navigationHelper = () => {
    const { navigation, routeName, resetStack } = this.props
    if (resetStack) {
      navigation.dispatch(
        NavigationActions.reset({
          index: 0,
          key: null,
          actions: [NavigationActions.navigate({ routeName })]
        })
      )
    }
    navigation.navigate(routeName)
  }

  render() {
    const { title } = this.props

    return (
      <TouchableOpacity
        onPress={() => {
          return this.navigationHelper()
        }}
      >
        <Text
          style={textStyle}
        >{title}
        </Text>
      </TouchableOpacity>
    )
  }
}
MainButton.defaultProps = {
  resetStack: false
}

MainButton.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired,
  resetStack: PropTypes.bool,
  routeName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default MainButton
