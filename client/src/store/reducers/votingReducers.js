import {createSlice} from '@reduxjs/toolkit'


const initialState = {
  isLoading: false,
}

const votingSlice = createSlice({
  name: 'voting',
  initialState: initialState,
  reducers: {

  },
})

export default votingSlice.reducer
export const {
} = votingSlice.actions