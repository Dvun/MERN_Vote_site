import React from 'react'
import {Button, List} from 'semantic-ui-react'
import RoomTime from './RoomTime'
import {deleteRoom, getCurrentRoom} from '../../../store/actions/roomActions'
import {useDispatch} from 'react-redux'

const RoomItem = ({room}) => {
  const dispatch = useDispatch()

  return (
    <List.Item>
      <div className="row p-1">
        <div className="col col-md-10">
          <List.Item>
            <List.Content>
              <List.Header as="h3">{room.roomName}</List.Header>
              <List.Description as="p">{room.description}</List.Description>
              {
                room?.startDate &&
                <RoomTime startDate={room.startDate}/>
              }
            </List.Content>
          </List.Item>
        </div>

        <div className="col col-md-2">
          <List.Content floated="right">
            <Button
              color="yellow"
              style={{width: '100%'}}
              onClick={() => dispatch(getCurrentRoom(room._id))}
            >
              Update
            </Button>
            <Button
              color="red"
              style={{width: '100%', marginTop: '5px'}}
              onClick={() => dispatch(deleteRoom(room._id))}
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