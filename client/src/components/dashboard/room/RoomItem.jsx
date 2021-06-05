import React from 'react'
import styles from './roomItem.module.scss'
import {Button, List} from 'semantic-ui-react'
import RoomTime from './RoomTime'
import {getCurrentRoom} from '../../../store/actions/roomActions'
import {useDispatch} from 'react-redux'
import {OPEN_MODAL} from '../../../store/reducers/modalWindowReducers'

const RoomItem = ({room}) => {
  const dispatch = useDispatch()

  return (
    <List.Item className={styles.roomItem}>
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
              onClick={
                () => dispatch(OPEN_MODAL({
                  id: room._id,
                  header: 'Remove Candidate',
                  removeType: 'removeRoom',
                  content: `Are you really want remove candidate ${room.roomName} ?`,
                }))}
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