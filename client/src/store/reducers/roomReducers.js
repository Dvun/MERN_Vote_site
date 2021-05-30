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

    CREATE_NEW_ROOM: (state) => {
      state.isLoading = false
    },

    UPDATE_ROOM: (state, action) => {
      state.rooms = state.rooms.map(room => room._id === action.payload._id ? action.payload : room)
      state.isLoading = false
    },

    DELETE_ROOM: (state, action) => {
      state.rooms = state.rooms.filter(room => room._id !== action.payload)
      state.isLoading = false
    },

    GET_CURRENT_ROOM: (state, action) => {
      state.currentRoom = action.payload
      state.isLoading = false
    },

    LOADING_DATA: (state, action) => {
      if (action.payload === 'create') state.isLoading = true
      if (action.payload === 'update') state.isLoading = true
      if (action.payload === 'stop') state.isLoading = false
    },

  },
})

export default roomSlice.reducer
export const {
  GET_ALL_ROOMS,
  CREATE_NEW_ROOM,
  DELETE_ROOM,
  GET_CURRENT_ROOM,
  UPDATE_ROOM,
  LOADING_DATA
} = roomSlice.actions