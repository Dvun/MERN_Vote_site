import React from 'react'
import {Button, Form} from 'semantic-ui-react'
import Select from 'react-select'
import {useSelector} from 'react-redux'
import {format} from 'date-fns'

const NewRoomForm = ({
                       handleSubmit, values, handleChange, candidates, setSelectorState, selectorState,
                       handleReset, currentRoom
                     }) => {
  const {isLoading} = useSelector(({roomReducers}) => roomReducers)

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
        placeholder="Vote room description"
        type="text"
        value={values.description}
        onChange={(e) => handleChange(e)}
        className="form-control mb-4 p-2"
      />
      <input
        name="startDate"
        type="date"
        value={values.startDate}
        min={format(new Date(Date.now()), 'yyyy-MM-dd')}
        onChange={(e) => handleChange(e)}
        className="form-control mb-4 p-2"
      />

      <Select
        isMulti
        options={candidates.map(candidate => (
          {value: candidate.email, label: candidate.name}
        ))}
        value={selectorState}
        onChange={values => setSelectorState(values)}
        className="basic-multi-select"
        classNamePrefix="select"
      />

      <Button
        loading={isLoading}
        className="mt-2"
        color="blue"
        type="submit"
        content={currentRoom ? 'Update Room' : 'Create Room'}
        disabled={values.roomName === '' || values.description === '' || values.startDate === '' || selectorState.length === 0}
      />
      <Button
        floated="right"
        className="mt-2"
        color="red"
        type="button"
        content="Reset"
        onClick={handleReset}
        disabled={values.roomName === '' || values.description === '' || values.startDate === '' || selectorState.length === 0}
      />
    </Form>
  )
}

export default NewRoomForm