import {combineReducers} from '@reduxjs/toolkit'
import authReducers from './reducers/authReducers'
import messagesReducers from './reducers/messagesReducers'
import candidateReducers from './reducers/candidateReducers'

const rootStore = combineReducers({
  authReducers,
  messagesReducers,
  candidateReducers
})

export default rootStore