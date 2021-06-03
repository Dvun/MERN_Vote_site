import React from 'react'
import ChartBar from './ChartBar'
import styles from './chartRooms.module.scss'

const ChartRooms = ({room, statistics}) => {

  return (
    <>
      <div className={styles.chartRoom}>
        <div className={styles['chartRoom__name']}>
          <h3>{room.roomName}</h3>
        </div>
        <div className={styles['chartRoom__bars']}>

          {
            room.candidates.map(candidate => (
              <ChartBar
                key={candidate._id}
                candidate={candidate}
                statistics={statistics}
                room={room}
              />
            ))
          }

        </div>
      </div>
    </>
  )
}

export default ChartRooms