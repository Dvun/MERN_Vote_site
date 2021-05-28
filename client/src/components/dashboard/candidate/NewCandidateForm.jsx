import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Button, Form} from 'semantic-ui-react'
import {createNewCandidate, updateCandidate} from '../../../store/actions/candidateActions'
import {GET_CURRENT_CANDIDATE} from '../../../store/reducers/candidateReducers'

const NewCandidateForm = () => {
  const dispatch = useDispatch()
  const {isLoading, currentCandidate} = useSelector(({candidateReducers}) => candidateReducers)
  const [values, setValues] = useState({fullName: '', email: '',})

  useEffect(() => {
    if (currentCandidate) setValues({fullName: currentCandidate.name, email: currentCandidate.email})
  }, [currentCandidate])

  const onSubmit = (e) => {
    e.preventDefault()
    if (values.fullName === '' || values.email === '') {
      return
    }
    if (currentCandidate !== null) {
      const updatedCandidate = {
        ...currentCandidate,
        name: values.fullName,
        email: values.email
      }
      dispatch(updateCandidate(updatedCandidate, setValues))
      return
    }
    dispatch(createNewCandidate(values, setValues))
  }

  const handleChange = (e) => {
    const name = e.target['name']
    setValues({...values, [name]: e.target.value})
  }

  const handleClear = () => {
    setValues({fullName: '', email: ''})
    dispatch(GET_CURRENT_CANDIDATE(null))
  }

  return (
    <Form onSubmit={onSubmit}>
      <input
        placeholder="Candidate full name"
        type="text"
        name="fullName"
        value={values.fullName}
        onChange={(e) => handleChange(e)}
        className="form-control mb-4 p-2"
      />
      <input
        placeholder="Candidate email"
        type="email"
        name="email"
        value={values.email}
        onChange={(e) => handleChange(e)}
        className="form-control mb-4 p-2"
      />

      <Button
        disabled={values.fullName === '' || values.email === ''}
        loading={isLoading}
        color="blue"
        type="submit"
        content={currentCandidate ? 'Update Candidate' : 'Create Candidate'}
      />
      <Button
        disabled={values.fullName === '' || values.email === ''}
        color="red"
        type="button"
        content='reset'
        floated='right'
        onClick={handleClear}
      />
    </Form>
  )
}

export default NewCandidateForm