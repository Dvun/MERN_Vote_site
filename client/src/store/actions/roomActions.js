import {callApi} from '../../utils/callApi'
import {ERROR_MESSAGE, SUCCESS_MESSAGE} from '../reducers/messagesReducers'
import {
  CREATE_NEW_ROOM,
  DELETE_ROOM,
  GET_ALL_ROOMS,
  GET_CURRENT_ROOM,
  LOADING_DATA,
  UPDATE_ROOM,
} from '../reducers/roomReducers'


export const getAllRooms = () => async (dispatch) => {
  try {
    const res = await callApi('/api/rooms', 'GET', {})
    dispatch(GET_ALL_ROOMS(res.data))
  } catch (e) {
    dispatch(ERROR_MESSAGE(e.response.data.message))
  }
}

export const getCurrentRoom = (id) => async (dispatch) => {
  try {
    dispatch(LOADING_DATA('getCurrent'))
    const res = await callApi(`/api/rooms/${id}`, 'GET', {})
    dispatch(GET_CURRENT_ROOM(res.data))
  } catch (e) {
    dispatch(ERROR_MESSAGE(e.response.data.message))
  }
}

export const createNewRoom = (room, handleReset) => async (dispatch) => {
  try {
    dispatch(LOADING_DATA('create'))
    const res = await callApi('/api/rooms', 'POST', room)
    dispatch(CREATE_NEW_ROOM())
    dispatch(SUCCESS_MESSAGE(res.data.message))
    handleReset()
    dispatch(getAllRooms())
  } catch (e) {
    dispatch(ERROR_MESSAGE(e.response.data.message))
    dispatch(LOADING_DATA('stop'))
  }
}

export const updateRoom = (handleReset, room) => async (dispatch) => {
  try {
    dispatch(LOADING_DATA('update'))
    const res = await callApi(`/api/rooms/${room._id}`, 'PUT', room)
    dispatch(UPDATE_ROOM(room))
    dispatch(GET_CURRENT_ROOM(null))
    dispatch(SUCCESS_MESSAGE(res.data.message))
    handleReset()
  } catch (e) {
    dispatch(ERROR_MESSAGE(e.response.data.message))
    dispatch(LOADING_DATA('stop'))
  }
}

export const deleteRoom = (id) => async (dispatch) => {
  try {
    const res = await callApi(`/api/rooms/${id}`, 'DELETE', {})
    dispatch(DELETE_ROOM(id))
    dispatch(SUCCESS_MESSAGE(res.data.message))
  } catch (e) {
    dispatch(ERROR_MESSAGE(e.response.data.message))
  }
}