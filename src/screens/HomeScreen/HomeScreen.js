import * as React from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'
import Header from '../../components/Header/Header'
import MainButton from '../../components/MainButton/MainButton'
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper'
import { colors } from '../../config'

const { container, textStyle, subContainer } = styles
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
        <View
          style={container}
        >
          <View
            style={[subContainer, { backgroundColor: colors.accentColor }]}
          >
            <Text
              style={[textStyle, { color: colors.secondaryColor }]}
            >
              Mobile Discussion Panel
            </Text>
          </View>
          <View
            style={[subContainer, { backgroundColor: colors.secondaryColor }]}
          >
            <Text
              style={[textStyle, { color: colors.primaryColor }]}
            >Ok , it's enough
            </Text>
          </View>
        </View>
      </ContentWrapper>
    )
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}

export default HomeScreen
