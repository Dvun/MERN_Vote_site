import React, {useEffect} from 'react'
import VoteRoomItem from './VoteRoomItem'
import {useDispatch, useSelector} from 'react-redux'
import {getAllRooms} from '../../store/actions/roomActions'

const VoteRoomsList = () => {
  const dispatch = useDispatch()
  const {rooms} = useSelector(({roomReducers}) => roomReducers)

  useEffect(() => {
    dispatch(getAllRooms())
  }, [dispatch])


  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          {
            rooms.map(room => (
              <VoteRoomItem key={room._id} room={room}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default VoteRoomsList