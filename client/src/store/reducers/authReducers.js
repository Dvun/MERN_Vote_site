import {createSlice} from '@reduxjs/toolkit'

const userFromLocalStorage = localStorage.getItem('user') ?
  JSON.parse(localStorage.getItem('user'))
  :
  null

const initialState = {
  user: userFromLocalStorage,
  isLoading: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {

    USER_REGISTER: (state) => {
      state.isLoading = false
    },

    USER_REGISTER_FAIL: (state) => {
      state.isLoading = false
    },

    USER_LOGIN: (state, action) => {
      localStorage.setItem('user', JSON.stringify(action.payload.user))
      localStorage.setItem('token', JSON.stringify(action.payload.token))
      state.user = action.payload.user
      state.isLoading = false
    },

    USER_LOGIN_FAIL: (state) => {
      state.isLoading = false
    },

    USER_LOGOUT: (state) => {
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      state.user = null
    },

    LOADING_DATA: (state) => {
      state.isLoading = true
    },

  },
})

export default authSlice.reducer
export const {
  USER_REGISTER,
  USER_LOGIN,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  LOADING_DATA,
  USER_REGISTER_FAIL,
} = authSlice.actions