import * as React from 'react'
import PropTypes from 'prop-types'
import { ContentWrapper, Header, MainButton } from '../../components'

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
          title='React Native Boilerplate'
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
