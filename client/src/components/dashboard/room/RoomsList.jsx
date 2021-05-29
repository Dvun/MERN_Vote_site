import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {List} from 'semantic-ui-react'
import RoomItem from './RoomItem'
import {getAllRooms} from '../../../store/actions/roomActions'
import {getAllCandidates} from '../../../store/actions/candidateActions'

const RoomsList = () => {
  const dispatch = useDispatch()
  const {rooms} = useSelector(({roomReducers}) => roomReducers)

  useEffect(() => {
    dispatch(getAllRooms())
    dispatch(getAllCandidates())
  }, [dispatch])

  return (
    <div className="col col-md-7 mt-5">
      <h1>List</h1>

      <List divided>
        {rooms.length === 0 && <h3 style={{textAlign: 'center'}}>Rooms List is Empty</h3>}
        {
          rooms.map(room => (
            <RoomItem key={room._id} room={room}/>
          ))
        }
      </List>

    </div>
  )
}

export default RoomsList