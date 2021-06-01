import React, {useEffect} from 'react'
import styles from './voteRoomDetails.module.scss'
import VoteRoomDetailsLeftSide from './VoteRoomDetailsLeftSide'
import VoteRoomDetailsRightSide from './VoteRoomDetailsRightSide'
import {useDispatch, useSelector} from 'react-redux'
import {getCurrentRoom} from '../../store/actions/roomActions'
import {Loader} from 'semantic-ui-react'
import {getCurrentUser} from '../../store/actions/authActions'

const VoteRoomDetails = ({match}) => {
  const roomId = match.params.id
  const dispatch = useDispatch()
  const {currentRoom, isLoading: currentRoomLoading} = useSelector(({roomReducers}) => roomReducers)
  const {user, currentUser, isLoading} = useSelector(({authReducers}) => authReducers)

  useEffect(() => {
    if (!currentRoom || currentRoom._id !== roomId) dispatch(getCurrentRoom(roomId))
    match.path === '/rooms/:id' && dispatch(getCurrentUser(user._id))
  }, [currentRoom, dispatch, roomId, user._id, match.path])

  return (
    <div className="container mt-5">
      <h1>Vote Rooms Details !</h1>
      <div className={styles.roomDetails}>
        <div className="row">
          <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 text-center">
            <h3 className="mb-3 mb-sm-3 mb-md-5 mb-lg-5">Room Details</h3>

            <VoteRoomDetailsLeftSide currentRoom={currentRoom}/>

          </div>

          {
            isLoading && currentRoomLoading ?
              <Loader active inline="centered" size="massive" className={styles.loader} content="Loading..."/>
              :
              <VoteRoomDetailsRightSide
                candidates={currentRoom?.candidates}
                roomId={roomId}
                currentUser={currentUser}
                isLoading={isLoading}
              />
          }

        </div>
      </div>
    </div>
  )
}

export default VoteRoomDetails