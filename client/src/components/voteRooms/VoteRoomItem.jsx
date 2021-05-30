import React from 'react'
import styles from './voteRoomItem.module.scss'
import {Link} from 'react-router-dom'
import RoomTime from '../dashboard/room/RoomTime'

const VoteRoomItem = ({room}) => {

  const resultDay = Date.now() >= Date.parse(room.startDate)

  return (
    <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12">
      <div className={styles.room}>
        <div className={`card-body ${styles['card-body']}`}>
          <div className="content">
            <h3 className="card-title">{room.roomName}</h3>
            <p className="card-text mt-2">{room.description}</p>
          </div>
          <div className={styles['room-date']}>
            <p>Candidates: {room.candidates.length}</p>
            <div className={styles['room-date__button']}>
              <h6 className="card-subtitle text-muted">
                <RoomTime startDate={room.startDate}/>
              </h6>
              {
                !resultDay &&
                <Link to="/rooms/:id" style={{width: '95px'}}>Start Vote</Link>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VoteRoomItem