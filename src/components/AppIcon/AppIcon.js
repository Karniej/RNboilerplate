import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import PropTypes from 'prop-types'
import { colors } from '../../config'
import styles from './styles'

const { appIconStyle } = styles

const AppIcon = ({ onPress, name, size }) => {
  return (
    <Icon
      name={name}
      size={size}
      color={colors.primaryColor}
      style={appIconStyle}
      onPress={onPress}
    />
  )
}

AppIcon.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  size: PropTypes.number.isRequired
}

export default AppIcon
