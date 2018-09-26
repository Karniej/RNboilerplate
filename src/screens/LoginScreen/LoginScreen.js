import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { TextField } from '@netguru-team-m/liquid-design-react-native'
import { Header, ContentWrapper, MainButton } from '../../components'

const LoginScreen = ({ navigation }) => {
  return (
    <ContentWrapper>
      <Header
        title='This is Login Screen'
      />
      <View
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <TextField
          textInputLabel='Login'
          placeholder='Login'
          testID='Login'
        />
        <TextField
          textInputLabel='Password'
          placeholder='Password'
          testID='Password'
        />
        <MainButton
          title='Log In'
          routeName='DrawerStack'
          navigation={navigation}
        />
      </View>
    </ContentWrapper>
  )
}
LoginScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}

export default LoginScreen
