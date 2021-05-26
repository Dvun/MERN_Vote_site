import {createSlice} from '@reduxjs/toolkit'


const initialState = {
  errorMsg: null,
  successMsg: null
}

const messagesSlice = createSlice({
  name: 'messages',
  initialState: initialState,
  reducers: {

    SUCCESS_MESSAGE: (state, action) => {
      state.successMsg = action.payload
    },

    ERROR_MESSAGE: (state, action) => {
      state.errorMsg = action.payload
    },

    HIDE_MESSAGES: (state) => {
      if (state.successMsg) state.successMsg = null
      if (state.errorMsg) state.errorMsg = null
    }

  }
})

export default messagesSlice.reducer
export const {
  SUCCESS_MESSAGE,
  ERROR_MESSAGE,
  HIDE_MESSAGES
} = messagesSlice.actions