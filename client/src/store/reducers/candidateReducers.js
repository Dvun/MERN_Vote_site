import {createSlice} from '@reduxjs/toolkit'


const initialState = {
  candidates: [],
  currentCandidate: null,
  isLoading: false,
  createCandidateLoading: false
}

const candidateSlice = createSlice({
  name: 'candidates',
  initialState: initialState,
  reducers: {

    GET_ALL_CANDIDATES: (state, action) => {
      state.candidates = action.payload
      state.isLoading = false
    },

    GET_CURRENT_CANDIDATE: (state, action) => {
      state.currentCandidate = action.payload
    },

    CREATE_NEW_CANDIDATE: (state) => {
      state.isLoading = false
    },

    UPDATE_CANDIDATE: (state) => {
      state.isLoading = false
    },

    DELETE_CANDIDATE: (state, action) => {
      state.candidates = state.candidates.filter(candidate => candidate._id !== action.payload)
      state.createCandidateLoading = false
    },

    LOADING_DATA: (state, action) => {
      if (action.payload === 'delete') state.createCandidateLoading = true
      if (action.payload === 'create') state.isLoading = true
    }

  },
})

export default candidateSlice.reducer
export const {
  GET_ALL_CANDIDATES,
  CREATE_NEW_CANDIDATE,
  DELETE_CANDIDATE,
  LOADING_DATA,
  GET_CURRENT_CANDIDATE,
  UPDATE_CANDIDATE
} = candidateSlice.actions