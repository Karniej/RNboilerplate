import React from 'react'
import { Provider } from 'react-redux'
import AppNavigation from './navigation/AppNavigation'
import store from './store'

const Root = () => {
  return (
    <Provider
      store={store}
    >
      <AppNavigation />
    </Provider>
  )
}

export default Root
