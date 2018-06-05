import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import styles from './styles'

const Header = ({ title, additionalStyles }) => {
  return <Text
    style={[styles.header, additionalStyles]}
  >{title}
  </Text>
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  additionalStyles: PropTypes.object
}
export default Header
