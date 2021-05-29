import React, {useState} from 'react'
import NewRoomForm from './NewRoomForm'
import {useDispatch, useSelector} from 'react-redux'
import {createNewRoom} from '../../../store/actions/roomActions'

const CreateNewRoom = () => {
  const dispatch = useDispatch()
  const {user} = useSelector(({authReducers}) => authReducers)
  const {candidates} = useSelector(({candidateReducers}) => candidateReducers)
  const [selectorState, setSelectorState] = useState(null)
  const [values, setValues] = useState({roomName: '', description: '', startDate: ''})

  const handleSubmit = (e) => {
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
      startDate: new Date(values.startDate)
    }
    dispatch(createNewRoom(newRoom, handleReset))
  }

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const handleReset = () => {
    setValues({roomName: '', description: '', startDate: ''})
    setSelectorState(null)
  }

  return (
    <>
      <div className="col col-md-5 mt-5">
        <h2>Create New Vote Room</h2>
        <NewRoomForm
          candidates={candidates}
          selectorState={selectorState}
          setSelectorState={setSelectorState}
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