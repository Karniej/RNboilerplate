import React from 'react'
import PropTypes from 'prop-types'

import { ContentWrapper, Header, MainButton } from '../../components'
import { colors } from '../../config'

class ThirdScreen extends React.Component {
  static navigationOptions = {
    title: 'Third',
    drawerLabel: 'Third',
    headerStyle: {
      backgroundColor: colors.secondaryColor
    }
  }
  render() {
    const { navigation } = this.props

    return (
      <ContentWrapper>
        <Header
          title='Third Screen'
        />
        <MainButton
          title='Log Out'
          navigation={navigation}
          resetStack
          routeName='LoginStack'
        />
      </ContentWrapper>
    )
  }
}
ThirdScreen.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func
  }).isRequired
}
export default ThirdScreen
