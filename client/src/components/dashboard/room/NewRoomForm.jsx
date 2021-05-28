import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import {Button, Form} from 'semantic-ui-react'

const NewRoomForm = () => {
  const {user} = useSelector(({authReducers}) => authReducers)
  const [values, setValues] = useState({
    roomName: '',
    description: '',
    startDate: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
  }

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  return (
    <Form onSubmit={handleSubmit}>
      <input
        name="roomName"
        placeholder="Vote room Name"
        type="text"
        value={values.roomName}
        onChange={(e) => handleChange(e)}
        className="form-control mb-4 p-2"
      />
      <input
        name="description"
        placeholder="Vote room Name"
        type="text"
        value={values.description}
        onChange={(e) => handleChange(e)}
        className="form-control mb-4 p-2"
      />
      <input
        name="startDate"
        type="date"
        value={values.startDate}
        onChange={(e) => handleChange(e)}
        className="form-control mb-4 p-2"
      />

      <Button
        color="blue"
        type="submit"
        content="Create Room"
      />
    </Form>
  )
}

export default NewRoomForm