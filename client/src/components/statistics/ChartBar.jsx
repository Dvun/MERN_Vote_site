import React from 'react'
import styles from './chartBar.module.scss'

const ChartBar = ({room, statistics, candidate}) => {

  let tabHeight = '0%'
  let voteCount
  statistics.map(statistic => {
    if (statistic._id._id === room._id) {
      statistic.getVotedCandidates.map(votedCandidate => {
        if (votedCandidate.getVote) {
          voteCount = votedCandidate.getVote
        } else {
          voteCount = 0
        }
        tabHeight = (voteCount / room.candidates.length) * 100 + '%'
      })
    }
  })

  statistics.map(statistic => {
    statistic.getVotedCandidates.map((candidate) => {
      console.log(statistic)
    })
  })

  return (
    <div className={styles.charBar}>
      <div className={styles.charBarItem}>
        <div className={styles.fill} style={{height: tabHeight}}/>

        {
          statistics.map(statistic => (
            statistic.getVotedCandidates.map((candidate) => (
              <span key={candidate.candidateId[statistic._id._id]}>Total vote: {candidate.getVote[statistic._id._id]}</span>
            ))
          ))
        }

        <label>{candidate.name}</label>
      </div>
    </div>
  )
}

export default ChartBar