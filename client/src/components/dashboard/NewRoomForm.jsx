import React from 'react'
import {Formik, Form} from 'formik'
import {useSelector} from 'react-redux'
import TextInput from '../../UI/forms/TextInput'
import {Button} from 'semantic-ui-react'

const NewRoomForm = () => {
  const {user} = useSelector(({authReducers}) => authReducers)

  const handleSubmit = (values, resetForm) => {
    console.log(values)
  }

  return (
    <Formik
     initialValues={{roomName: '', description: '', startDate: ''}}
     onSubmit={(values, {resetForm}) => handleSubmit(values, resetForm)}
    >
      <Form>
        <TextInput
          name='roomName'
          placeholder='Vote room Name'
          type='text'
          className="form-control mb-4 p-2"
        />
        <TextInput
          name='description'
          placeholder='Vote room Name'
          type='text'
          className="form-control mb-4 p-2"
        />
        <TextInput
          name='startDate'
          type='date'
          className="form-control mb-4 p-2"
        />

        <Button color='blue' content='Create Room'/>
      </Form>

    </Formik>
  )
}

export default NewRoomForm