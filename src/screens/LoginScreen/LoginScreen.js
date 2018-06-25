import React from 'react'
import PropTypes from 'prop-types'
import { Header, ContentWrapper, MainButton } from '../../components'

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Log In',
    headerLeft: null
  }
  render() {
    const { navigation } = this.props

    return (
      <ContentWrapper>
        <Header
          title='This is Login Screen'
        />
        <MainButton
          title='Log In'
          routeName='DrawerStack'
          navigation={navigation}
        />
      </ContentWrapper>
    )
  }
}
LoginScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}

export default LoginScreen
