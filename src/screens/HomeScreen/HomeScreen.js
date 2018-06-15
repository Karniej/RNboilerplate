import * as React from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/Header/Header'
import MainButton from '../../components/MainButton/MainButton'
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    drawerLabel: 'Home',
    headerStyle: {
      backgroundColor: 'black'
    }
  }

  render() {
    const { navigation } = this.props

    return (
      <ContentWrapper>
        <Header
          title='Netguru React Native Boilerplate'
        />
        <MainButton
          title='Second Screen'
          routeName='Second'
          navigation={navigation}
        />
      </ContentWrapper>
    )
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}

export default HomeScreen
