import {configureStore} from '@reduxjs/toolkit'
import rootStore from './rootStore'

const store = configureStore({
  reducer: rootStore
})

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootStore', () => {
    const newRootReducer = require('./rootStore').default
    store.replaceReducer(newRootReducer)
  })
}

export default store