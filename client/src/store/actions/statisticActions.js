import {callApi} from '../../utils/callApi'
import {ERROR_MESSAGE} from '../reducers/messagesReducers'
import {GET_ALL_STATISTIC, GET_CURRENT_STATISTIC, LOADING_DATA} from '../reducers/statisticReducers'

export const getAllStatistic = () => async (dispatch) => {
  try {
    dispatch(LOADING_DATA('getAllStatistic'))
    const res = await callApi(`/api/statistics`, 'GET', {})
    dispatch(GET_ALL_STATISTIC(res.data))
  } catch (e) {
    dispatch(ERROR_MESSAGE(e.response.data.message))
  }
}

export const getCurrentStatistic = (id) => async (dispatch) => {
  try {
    dispatch(LOADING_DATA('getCurrentStatistic'))
    const res = await callApi(`/api/voting/${id}`, 'GET', {})
    dispatch(GET_CURRENT_STATISTIC(res.data))
  } catch (e) {
    dispatch(ERROR_MESSAGE(e.response.data.message))
  }
}