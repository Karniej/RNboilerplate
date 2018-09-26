import React from 'react'
import PropTypes from 'prop-types'
import { Filter } from '@netguru-team-m/liquid-design-react-native'
import { Header, ContentWrapper, MainButton } from '../../components'

import { colors } from '../../config'

const options = ['Cherry', 'Apple', 'Orange', 'Tomato']
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
        <Filter
          options={options}
          singleSelect
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
