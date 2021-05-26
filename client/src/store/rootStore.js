import {combineReducers} from '@reduxjs/toolkit'
import authReducers from './reducers/authReducers'
import messagesReducers from './reducers/messagesReducers'

const rootStore = combineReducers({
  authReducers,
  messagesReducers
})

export default rootStore