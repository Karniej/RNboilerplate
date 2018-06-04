import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

const { logo, container } = styles
const Logo = ({ additionalStyle, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[container, additionalStyle]}
    >
      <Image
        style={logo}
        source={require('../../assets/selfmade_developer_logo.png')}
      />
    </TouchableOpacity>
  )
}

Logo.defaultProps = {
  additionalStyle: {}
}

Logo.propTypes = {
  additionalStyle: PropTypes.object,
  onPress: PropTypes.func
}

export default Logo
