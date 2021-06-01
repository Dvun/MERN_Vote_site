import React from 'react'
import {format} from 'date-fns'
import {List} from 'semantic-ui-react'

const RoomTime = ({startDate}) => {

  const resultDay = Date.now() >= Date.parse(startDate)

  return (
    <List.Description as="div">
      {
        resultDay ?
          <span style={{color: 'red'}}><b>VOTE FINISH!</b></span>
          :
          <span>Vote last day: {format(new Date(startDate), 'dd.MM.yyyy')}</span>
      }
    </List.Description>
  )
}

export default RoomTime