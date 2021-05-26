import {createSlice} from '@reduxjs/toolkit'


const initialState = {
  rooms: [],
  currentRoom: null,
  isLoading: false,
}

const roomSlice = createSlice({
  name: 'rooms',
  initialState: initialState,
  reducers: {

    GET_ALL_ROOMS: (state, action) => {
      state.rooms = action.payload
      state.isLoading = false
    },

    CREATE_NEW_ROOM: (state, action) => {
      state.rooms = action.payload
      state.isLoading = false
    },

  },
})

export default roomSlice.reducer
export const {
  GET_ALL_ROOMS,
  CREATE_NEW_ROOM
} = roomSlice.actions