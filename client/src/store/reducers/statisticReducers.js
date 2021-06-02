import {createSlice} from '@reduxjs/toolkit'


const initialState = {
  statistics: [],
  currentStatistic: null,
  isLoading: false
}

const statisticSlice = createSlice({
  name: 'statistic',
  initialState: initialState,
  reducers: {

    GET_ALL_STATISTIC: (state, action) => {
      state.statistics = action.payload
      state.isLoading = false
    },

    GET_CURRENT_STATISTIC: (state, action) => {
      state.currentStatistic = action.payload
      state.isLoading = false
    },

    LOADING_DATA: (state, action) => {
      if (action.payload === 'getAllStatistic') state.isLoading = true
      if (action.payload === 'getCurrentStatistic') state.isLoading = true
    }

  }
})

export default statisticSlice.reducer
export const {
  GET_ALL_STATISTIC,
  GET_CURRENT_STATISTIC,
  LOADING_DATA
} = statisticSlice.actions