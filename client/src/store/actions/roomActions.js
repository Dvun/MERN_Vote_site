import {callApi} from '../../utils/callApi'
import {LOADING_DATA} from '../reducers/candidateReducers'
import {ERROR_MESSAGE, SUCCESS_MESSAGE} from '../reducers/messagesReducers'
import {CREATE_NEW_ROOM, GET_ALL_ROOMS} from '../reducers/roomReducers'


export const getAllRooms = () => async (dispatch) => {
  try {
    const res = await callApi('/api/rooms', 'GET', {})
    dispatch(GET_ALL_ROOMS(res.data))
  } catch (e) {
    // dispatch(ERROR_MESSAGE(e.response.data.message))
  }
}

export const getCurrentRoom = (id) => async (dispatch) => {
  try {

  } catch (e) {

  }
}

export const createNewRoom = (room, handleReset) => async (dispatch) => {
  try {
    dispatch(LOADING_DATA('create'))
    const res = await callApi('/api/rooms', 'POST', room)
    dispatch(CREATE_NEW_ROOM())
    dispatch(SUCCESS_MESSAGE(res.data.message))
    handleReset()
  } catch (e) {
    dispatch(ERROR_MESSAGE(e.response.data.message))
  }
}

export const updateRoom = (room) => async (dispatch) => {
  try {

  } catch (e) {

  }
}

export const deleteRoom = (id) => async (dispatch) => {
  try {

  } catch (e) {

  }
}