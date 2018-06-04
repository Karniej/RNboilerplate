import React from 'react'
import PropTypes from 'prop-types'
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper'
import Header from '../../components/Header/Header'
import MainButton from '../../components/MainButton/MainButton'
import { colors } from '../../config'

class SecondScreen extends React.Component {
  static navigationOptions = {
    title: 'Second',
    drawerLabel: 'Second',
    headerStyle: {
      backgroundColor: colors.secondaryColor
    }
  }
  render() {
    const { navigation } = this.props

    return (
      <ContentWrapper>
        <Header
          title='Welcome to Second Screen'
        />
        <MainButton
          title='Third Screen'
          navigation={navigation}
          routeName='Third'
        />
      </ContentWrapper>
    )
  }
}
SecondScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}
export default SecondScreen
