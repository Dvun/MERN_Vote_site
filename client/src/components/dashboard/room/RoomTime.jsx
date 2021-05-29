import React from 'react'
import {format} from 'date-fns'
import {List} from 'semantic-ui-react'

const RoomTime = ({startDate}) => {
  const dayNow = Date.now()
  const voteDay = Date.parse(startDate)

  return (
    <List.Description as="div">
      Vote start:
      {' '}
      <b>
        {
          voteDay <= dayNow ?
            <span style={{color: 'red'}}>Vote finish!</span>
            :
            format(new Date(startDate), 'dd.MM.yyyy')
        }
      </b>
    </List.Description>
  )
}

export default RoomTime