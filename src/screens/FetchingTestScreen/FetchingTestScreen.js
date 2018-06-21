import * as React from 'react'
import { View, FlatList } from 'react-native'
import _ from 'lodash'
import styles from './styles'
import MainButton from '../../components/MainButton/MainButton'
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper'
import { apiUrl } from '../../config/apiConfig'
import SingleItem from '../../components/SingleItem/SingleItem'

const {
  contentWrapperStyles, buttonsContainer, mainButtonStyles, flatListStyles
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
      page: 1
    }
  }

  setList = (list) => {
    this.setState({ itemList: [...this.state.itemList, ...list] })
  }

  async fetchData() {
    try {
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
      </ContentWrapper>
    )
  }
}

export default FetchingTestScreen
