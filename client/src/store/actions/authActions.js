import {callApi} from '../../utils/callApi'
import {ERROR_MESSAGE, SUCCESS_MESSAGE} from '../reducers/messagesReducers'
import {
  GET_CURRENT_USER,
  LOADING_DATA,
  USER_LOGIN,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER,
  USER_REGISTER_FAIL,
} from '../reducers/authReducers'


export const getCurrentUser = (id) => async (dispatch) => {
  try {
    dispatch(LOADING_DATA())
    const res = await callApi(`/api/auth/users/${id}`, 'GET', {})
    dispatch(GET_CURRENT_USER(res.data))
  } catch (e) {
    dispatch(ERROR_MESSAGE(e.response.data.message))
  }
}

export const registerUser = (user, resetForm, history) => async (dispatch) => {
  try {
    dispatch(LOADING_DATA())
    const res = await callApi('/api/auth/register', 'POST', user)
    dispatch(USER_REGISTER())
    dispatch(SUCCESS_MESSAGE(res.data.message))
    resetForm()
    history.push('/login')
  } catch (e) {
    dispatch(USER_REGISTER_FAIL())
    dispatch(ERROR_MESSAGE(e.response.data.message))
  }
}

export const loginUser = (user) => async (dispatch) => {
  try {
    dispatch(LOADING_DATA())
    const res = await callApi('/api/auth/login', 'POST', user)
    dispatch(USER_LOGIN(res.data.loggedUser))
    dispatch(SUCCESS_MESSAGE(res.data.message))
  } catch (e) {
    dispatch(USER_LOGIN_FAIL())
    dispatch(ERROR_MESSAGE(e.response.data.message))
  }
}

export const userLogout = () => async (dispatch) => {
  try {
    // await callApi('/api/auth/logout', 'GET', {})
    dispatch(USER_LOGOUT())
  } catch (e) {
  }
}