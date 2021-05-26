import React from 'react'
import styles from './voteRoomItem.module.scss'
import {Link} from 'react-router-dom'

const VoteRoomItem = () => {
  return (
    <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12">
      <div className={styles.room}>
        <div className={`card-body ${styles['card-body']}`}>
          <div className="content">
            <h5 className="card-title">President Vote!</h5>
            <h6 className="card-subtitle mb-2 text-muted">vote start: 05.06.2021</h6>
            <p className="card-text">
              New President vote!
            </p>
          </div>
          <div className={styles['room-date']}>
            <p className=''>Vote start: 25.05.2021</p>
            <Link to="/rooms/:id" >Start Vote</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VoteRoomItem