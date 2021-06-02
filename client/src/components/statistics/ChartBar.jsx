import React from 'react'
import styles from './chartBar.module.scss'

const ChartBar = ({candidate, totalCandidates}) => {
  const tabHeight = candidate.getVote / totalCandidates * 100 + '%'


  return (
    <div className={styles.charBar}>
      <div className={styles.charBarItem}>
        <div className={styles.fill} style={{height: tabHeight}}/>
        <span>total: {candidate.getVote} votes</span>
      <label>{candidate.name}</label>
      </div>
    </div>
  )
}

export default ChartBar