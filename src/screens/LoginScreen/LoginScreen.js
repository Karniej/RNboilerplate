import React from 'react'
import PropTypes from 'prop-types'
import { ContentWrapper, Header, MainButton } from '../../components'

const LoginScreen = ({ navigation }) => {
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
LoginScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}

export default LoginScreen
