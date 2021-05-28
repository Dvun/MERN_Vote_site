import React from 'react'
import {ErrorMessage, useField} from 'formik'

const TextInput = ({...props}) => {
  const [field, meta] = useField(props)


  return (
    <>
      <div style={{position: 'relative'}}>
        <input {...field} {...props} />
        <ErrorMessage
          name={field.name}
          render={() => <div style={{color: 'red', position: 'absolute', bottom: '-17px'}}>{meta.error}</div>}
        />
      </div>
    </>
  )
}

export default TextInput