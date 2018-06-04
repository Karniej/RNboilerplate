import React from 'react'
import { View, Modal, WebView, Linking, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import PropTypes from 'prop-types'
import styles from './styles'
import Logo from '../Logo/Logo'
import { constants } from '../../config'

const { container, modalContent, modalButtons } = styles

class ContentWrapper extends React.Component {
  state = {
    modalVisible: false
  }
  onModalClose = () => {
    this.setState({
      modalVisible: false
    })
  }

  onModalOpen = () => {
    this.setState({
      modalVisible: true
    })
  }
  openInBrowser = () => {
    return Linking.openURL(constants.modalUrl)
  }

  renderModal = () => {
    return (
      <Modal
        animationType='slide'
        visible={this.state.modalVisible}
        onRequestClose={this.onModalClose}
        url={{ uri: constants.modalUrl }}
      >
        <View
          style={modalContent}
        >
          <View
            style={modalButtons}
          >
            <Icon
              name={Platform.select({ ios: 'ios-arrow-back', android: 'md-arrow-back' })}
              onPress={this.onModalClose}
              size={25}
            />
            <Icon
              name={Platform.select({ ios: 'ios-browsers-outline', android: 'md-browsers' })}
              onPress={this.openInBrowser}
              size={25}
            />
          </View>
          <WebView
            scalesPageToFit
            source={{ uri: constants.modalUrl }}
          />
        </View>
      </Modal>
    )
  }

  render() {
    const { children, additionalStyles } = this.props

    return (
      <View
        style={[container, additionalStyles]}
      >
        {children}
        <Logo
          onPress={this.onModalOpen}
        />
        {this.renderModal()}
      </View>
    )
  }
}

ContentWrapper.propTypes = {
  children: PropTypes.node,
  additionalStyles: PropTypes.object
}
export default ContentWrapper
