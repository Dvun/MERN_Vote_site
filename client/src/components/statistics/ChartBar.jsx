import React from 'react'
import styles from './chartBar.module.scss'

const ChartBar = ({room, statistics, candidate}) => {

  let voteCount = statistics.filter(item => item._id._id === room._id)[0]?.getVotedCandidates.filter((cnd => cnd.candidateId === candidate._id))[0]?.getVote
  let tabHeight = Math.round((voteCount === undefined ? 0 : voteCount / room.candidates.length) * 100) + '%'

  return (
    <div className={styles.charBar}>
      <div className={styles.charBarItem}>
        <div className={styles.fill} style={{height: tabHeight}}/>
        <span>Total vote: {voteCount ? voteCount : 0}</span>
        <label>{candidate.name}</label>
      </div>
    </div>
  )
}

export default ChartBar