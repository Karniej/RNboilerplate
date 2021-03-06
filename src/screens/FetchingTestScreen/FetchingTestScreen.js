import * as React from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'
import _ from 'lodash'
import styles from './styles'
import { MainButton, ContentWrapper, SingleItem } from '../../components'
import { colors, apiUrl } from '../../config'

const {
  contentWrapperStyles,
  buttonsContainer,
  mainButtonStyles,
  flatListStyles,
  visible,
  invisible
} = styles

class FetchingTestScreen extends React.Component {
  static navigationOptions = {
    title: 'PUNK API BEERS LIST',
    drawerLabel: 'Test API Request',
    headerStyle: {
      backgroundColor: 'black'
    }
  }

  constructor() {
    super()
    this.state = {
      itemList: [],
      page: 1,
      isFetching: false
    }
  }

  setList = (list) => {
    this.setState({ itemList: [...this.state.itemList, ...list], isFetching: false })
  }

  async fetchData() {
    try {
      await this.setState({ isFetching: true })
      const response = await fetch(apiUrl(this.state.page), {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      const responseToJson = await response.json()
      const itemList = await [...responseToJson]
      await this.setList(itemList)
    } catch (error) {
      console.log('failed fetching data', error)
    }
  }

  fetchMoreData = _.throttle(() => {
    this.setState({ page: this.state.page + 1 }, () => {
      return this.fetchData()
    })
  }, 600)

  sortByNameOrder = () => {
    const { itemList } = this.state
    const sortedList = _.orderBy(itemList, ['name'], ['asc'])

    this.setState({ itemList: sortedList })
  }

  handleFetchData = () => {
    this.fetchData()
  }

  handleFilterData = () => {
    this.sortByNameOrder()
  }

  renderItem = (item) => {
    return <SingleItem
      {...item}
    />
  }

  render() {
    return (
      <ContentWrapper
        additionalStyles={contentWrapperStyles}
      >
        <View
          style={buttonsContainer}
        >
          <MainButton
            title='Show Beers'
            onPress={this.handleFetchData}
            additionalStyles={mainButtonStyles}
          />
          <MainButton
            title='A-Z'
            onPress={this.handleFilterData}
            additionalStyles={mainButtonStyles}
          />
        </View>
        <FlatList
          style={flatListStyles}
          data={this.state.itemList}
          keyExtractor={(item) => {
            return `${item.id}`
          }}
          onEndReached={this.fetchMoreData}
          onEndTreshHold={1}
          renderItem={this.renderItem}
        />
        <ActivityIndicator
          style={this.state.isFetching ? visible : invisible}
          size='large'
          color={colors.accentColor}
        />
      </ContentWrapper>
    )
  }
}

export default FetchingTestScreen
