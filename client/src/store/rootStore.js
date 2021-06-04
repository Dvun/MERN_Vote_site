import {combineReducers} from '@reduxjs/toolkit'
import authReducers from './reducers/authReducers'
import messagesReducers from './reducers/messagesReducers'
import candidateReducers from './reducers/candidateReducers'
import roomReducers from './reducers/roomReducers'
import statisticReducers from './reducers/statisticReducers'
import modalWindowReducers from './reducers/modalWindowReducers'

const rootStore = combineReducers({
  authReducers,
  messagesReducers,
  candidateReducers,
  roomReducers,
  statisticReducers,
  modalWindowReducers
})

export default rootStore