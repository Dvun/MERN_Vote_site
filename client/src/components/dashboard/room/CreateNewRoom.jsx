import React, {useEffect, useState} from 'react'
import NewRoomForm from './NewRoomForm'
import {useDispatch, useSelector} from 'react-redux'
import {createNewRoom, updateRoom} from '../../../store/actions/roomActions'
import {format} from 'date-fns'
import {GET_CURRENT_ROOM} from '../../../store/reducers/roomReducers'

const CreateNewRoom = () => {
  const dispatch = useDispatch()
  const {user} = useSelector(({authReducers}) => authReducers)
  const {candidates} = useSelector(({candidateReducers}) => candidateReducers)
  const {currentRoom} = useSelector(({roomReducers}) => roomReducers)
  const [selectorState, setSelectorState] = useState([])
  const [values, setValues] = useState({roomName: '', description: '', startDate: ''})

  // If Current Candidate
  useEffect(() => {
    if (!currentRoom) handleReset()
    currentRoom && setValues({
      roomName: currentRoom.roomName,
      description: currentRoom.description,
      startDate: format(new Date(currentRoom.startDate), 'yyyy-MM-dd'),
    })
    if (currentRoom) {
      let candidateArr = []
      candidates.forEach(candidate => {
        currentRoom.candidates.forEach(roomCnd => {
          if (candidate._id === roomCnd._id) {
            candidateArr.push({value: candidate.email, label: candidate.name})
            setSelectorState(candidateArr)
          }
        })
      })
    }
  }, [currentRoom, candidates])

  // Create and Update Candidate
  const handleSubmit = async (e) => {
    e.preventDefault()
    let candidateArr = []
    selectorState.forEach(candidateEmail => {
      candidates.forEach(candidate => {
        if (candidateEmail.value === candidate.email) {
          candidateArr.push(candidate)
        }
      })
    })
    const newRoom = {
      ...values,
      candidates: candidateArr,
      createdBy: user._id,
      startDate: new Date(values.startDate),
    }
    if (currentRoom) {
      await dispatch(updateRoom(handleReset, {
        ...currentRoom,
        roomName: values.roomName,
        description: values.description,
        candidates: candidateArr,
        createdBy: user._id,
        startDate: Date.parse(values.startDate),
      }))
      return
    }
    dispatch(createNewRoom(newRoom, handleReset))
  }

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const handleReset = () => {
    setValues({roomName: '', description: '', startDate: ''})
    setSelectorState([])
    dispatch(GET_CURRENT_ROOM(null))
  }

  return (
    <>
      <div className="col col-md-5 mt-5">
        <h2>Create New Vote Room</h2>
        <NewRoomForm
          candidates={candidates}
          selectorState={selectorState}
          setSelectorState={setSelectorState}
          currentRoom={currentRoom}
          handleReset={handleReset}
          values={values}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      </div>
    </>
  )
}

export default CreateNewRoom