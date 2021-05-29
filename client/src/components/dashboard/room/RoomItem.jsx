import React from 'react'
import {Button, List} from 'semantic-ui-react'
import {format} from 'date-fns'
import RoomTime from './RoomTime'

const RoomItem = ({room}) => {

  if (Date.parse(room.startDate) >= Date.now()) {
    console.log('vote coming')
  }


  return (
    <List.Item>
      <div className="row p-1">
        <div className="col col-md-10">
          <List.Item>
            <List.Content>
              <List.Header as="h3">{room.roomName}</List.Header>
              <List.Description as="p">{room.description}</List.Description>
              <RoomTime startDate={room.startDate}/>
            </List.Content>
          </List.Item>
        </div>

        <div className="col col-md-2">
          <List.Content floated="right">
            <Button
              color="yellow"
              style={{width: '100%'}}
              // onClick={() => dispatch(getCurrentCandidate(candidate._id))}
            >
              Update
            </Button>
            <Button
              // loading={createCandidateLoading}
              color="red"
              style={{width: '100%', marginTop: '5px'}}
              // onClick={() => dispatch(deleteCandidate(candidate._id))}
            >
              Delete
            </Button>
          </List.Content>
        </div>
      </div>

    </List.Item>
  )
}

export default RoomItem