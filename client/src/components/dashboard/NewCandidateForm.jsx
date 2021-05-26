import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Form, Formik} from 'formik'
import TextInput from '../../UI/forms/TextInput'
import {Button} from 'semantic-ui-react'
import {createNewCandidate} from '../../store/actions/candidateActions'

const NewCandidateForm = () => {
  const dispatch = useDispatch()
  const {user} = useSelector(({authReducers}) => authReducers)

  const handleSubmit = (values, resetForm) => {
    dispatch(createNewCandidate(values, resetForm))
  }

  return (
    <Formik
      initialValues={{fullName: '', email: ''}}
      onSubmit={(values, {resetForm}) => handleSubmit(values, resetForm)}
    >
      <Form>
        <TextInput
          name='fullName'
          placeholder='Candidate full name'
          type='text'
          className="form-control mb-4 p-2"
        />
        <TextInput
          name='email'
          placeholder='Candidate email'
          type='text'
          className="form-control mb-4 p-2"
        />

        <Button color='blue' type='submit' content='Create Candidate'/>
      </Form>

    </Formik>
  )
}

export default NewCandidateForm