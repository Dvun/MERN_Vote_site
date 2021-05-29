import React from 'react'
import {Button, Form} from 'semantic-ui-react'
import Select from 'react-select'

const NewRoomForm = ({
                       handleSubmit,
                       values,
                       handleChange,
                       candidates,
                       setSelectorState,
                       selectorState,
                       handleReset,
                     }) => {


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
        className="mt-2"
        color="blue"
        type="submit"
        content="Create Room"
        disabled={values.roomName === '' || values.description === '' || values.startDate === '' || selectorState === null}
      />
      <Button
        floated="right"
        className="mt-2"
        color="red"
        type="button"
        content="Reset"
        onClick={handleReset}
        disabled={values.roomName === '' || values.description === '' || values.startDate === '' || selectorState === null}
      />
    </Form>
  )
}

export default NewRoomForm