import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/Header/Header'
import MainButton from '../../components/MainButton/MainButton'
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper'

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
