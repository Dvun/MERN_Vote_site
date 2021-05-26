import {createSlice} from '@reduxjs/toolkit'


const initialState = {
  candidates: [],
  currentCandidate: null,
  isLoading: false
}

const candidateSlice = createSlice({
  name: 'candidates',
  initialState: initialState,
  reducers: {

    GET_ALL_CANDIDATES: (state, action) => {
      state.candidates = action.payload
      state.isLoading = false
    },

    CREATE_NEW_CANDIDATE: (state, action) => {
      state.candidates = action.payload
      state.isLoading = false
    },

  },
})

export default candidateSlice.reducer
export const {
  GET_ALL_CANDIDATES,
  CREATE_NEW_CANDIDATE
} = candidateSlice.actions