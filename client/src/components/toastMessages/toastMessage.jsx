import React, {useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch, useSelector} from 'react-redux'
import {HIDE_MESSAGES} from '../../store/reducers/messagesReducers'

const ToastMessage = () => {
  const dispatch = useDispatch()
  const {successMsg, errorMsg} = useSelector(({messagesReducers}) => messagesReducers)

  useEffect(() => {
    successMsg && toast.success(successMsg)
    errorMsg && toast.error(errorMsg)

    const timer = setTimeout(() => dispatch(HIDE_MESSAGES()), 500)
    return () => clearTimeout(timer)
  }, [dispatch, successMsg, errorMsg])

  return (
    <div>
      <ToastContainer />
    </div>
  )
}

export default ToastMessage