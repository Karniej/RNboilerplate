import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import NavigationActions from 'react-navigation/src/NavigationActions'
import PropTypes from 'prop-types'

import styles from './styles'

const { container, textStyle } = styles

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

  handleOnPress = () => {
    const { onPress } = this.props
    if (onPress) {
      onPress()
    } else {
      this.navigationHelper()
    }
  }
  render() {
    const { title, additionalStyles } = this.props

    return (
      <TouchableOpacity
        style={[container, additionalStyles]}
        onPress={() => {
          return this.handleOnPress()
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
  additionalStyles: PropTypes.object,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }),
  resetStack: PropTypes.bool,
  routeName: PropTypes.string,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func
}

export default MainButton
