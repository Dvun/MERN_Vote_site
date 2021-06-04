import {createSlice} from '@reduxjs/toolkit'


const initialState = {
  modalWindow: false,
  modalWindowProps: null
}

const modalWindowSlice = createSlice({
  name: 'modalWindow',
  initialState: initialState,
  reducers: {

    OPEN_MODAL: (state, action) => {
      state.modalWindow = true
      state.modalWindowProps = action.payload
    },

    CLOSE_MODAL: (state) => {
      state.modalWindow = false
      state.modalWindowProps = null
    }

  }
})

export default modalWindowSlice.reducer
export const {
  OPEN_MODAL,
  CLOSE_MODAL
} = modalWindowSlice.actions