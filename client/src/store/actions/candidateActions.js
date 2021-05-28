import {callApi} from '../../utils/callApi'
import {ERROR_MESSAGE, SUCCESS_MESSAGE} from '../reducers/messagesReducers'
import {
  CREATE_NEW_CANDIDATE,
  DELETE_CANDIDATE,
  GET_ALL_CANDIDATES,
  GET_CURRENT_CANDIDATE,
  LOADING_DATA, UPDATE_CANDIDATE,
} from '../reducers/candidateReducers'


export const getAllCandidates = () => async (dispatch) => {
  try {
    const res= await callApi('/api/candidates', 'GET', {})
    dispatch(GET_ALL_CANDIDATES(res.data))
  } catch (e) {
    dispatch(ERROR_MESSAGE(e.response.data.message))
  }
}

export const getCurrentCandidate = (id) => async (dispatch) => {
  try {
    const res = await callApi(`/api/candidates/${id}`, 'GET', {})
    dispatch(SUCCESS_MESSAGE(res.data.message))
    dispatch(GET_CURRENT_CANDIDATE(res.data))
  } catch (e) {

  }
}

export const createNewCandidate = (candidate, setValues) => async (dispatch) => {
  try {
    dispatch(LOADING_DATA('create'))
    const res = await callApi('/api/candidates', 'POST', candidate)
    dispatch(SUCCESS_MESSAGE(res.data.message))
    dispatch(CREATE_NEW_CANDIDATE())
    setValues({fullName: '', email: ''})
    dispatch(getAllCandidates())
  } catch (e) {
    dispatch(ERROR_MESSAGE(e.response.data.message))
  }
}

export const updateCandidate = (candidate, setValues) => async (dispatch) => {
  console.log(candidate)
  try {
    dispatch(LOADING_DATA('create'))
    const res = await callApi(`/api/candidates/${candidate._id}`, 'PUT', candidate)
    dispatch(SUCCESS_MESSAGE(res.data.message))
    dispatch(UPDATE_CANDIDATE())
    setValues({fullName: '', email: ''})
    dispatch(getAllCandidates())
    dispatch(GET_CURRENT_CANDIDATE(null))
  } catch (e) {
    dispatch(ERROR_MESSAGE(e.response.data.message))
    dispatch(UPDATE_CANDIDATE())
  }
}

export const deleteCandidate = (id) => async (dispatch) => {
  try {
    dispatch(LOADING_DATA('delete'))
    const res = await callApi(`/api/candidates/${id}`, 'DELETE', {})
    dispatch(DELETE_CANDIDATE(id))
    dispatch(SUCCESS_MESSAGE(res.data.message))
  } catch (e) {
    dispatch(ERROR_MESSAGE(e.response.data.message))
  }
}