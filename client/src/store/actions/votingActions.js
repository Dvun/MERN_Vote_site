import {callApi} from '../../utils/callApi'
import {ERROR_MESSAGE, SUCCESS_MESSAGE} from '../reducers/messagesReducers'
import {getCurrentUser} from './authActions'

export const startVoting = (votingRoomAndCandidate) => async (dispatch) => {
  try {
    const res = await callApi(`/api/voting/${votingRoomAndCandidate.roomId}`, 'PUT', {votingRoomAndCandidate})
    dispatch(SUCCESS_MESSAGE(res.data.message))
    dispatch(getCurrentUser(votingRoomAndCandidate.userId))
  } catch (e) {
    dispatch(ERROR_MESSAGE(e.response.data.message))
  }
}