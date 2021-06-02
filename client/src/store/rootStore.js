import {combineReducers} from '@reduxjs/toolkit'
import authReducers from './reducers/authReducers'
import messagesReducers from './reducers/messagesReducers'
import candidateReducers from './reducers/candidateReducers'
import roomReducers from './reducers/roomReducers'
import statisticReducers from './reducers/statisticReducers'

const rootStore = combineReducers({
  authReducers,
  messagesReducers,
  candidateReducers,
  roomReducers,
  statisticReducers
})

export default rootStore