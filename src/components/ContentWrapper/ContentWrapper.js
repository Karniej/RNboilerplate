import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

const { container } = styles

const ContentWrapper = ({ children, additionalStyles }) => {
  return <View
    style={[container, additionalStyles]}
  >{children}
         </View>
}

ContentWrapper.propTypes = {
  children: PropTypes.node,
  additionalStyles: PropTypes.object
}
export default ContentWrapper
