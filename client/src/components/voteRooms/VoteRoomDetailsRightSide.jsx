import React, {useEffect, useState} from 'react'
import styles from './voteRoomDetailsRightSide.module.scss'
import {Button} from 'semantic-ui-react'
import {useDispatch} from 'react-redux'
import {startVoting} from '../../store/actions/votingActions'

const VoteRoomDetailsRightSide = ({candidates, roomId, currentUser, isLoading}) => {
  const dispatch = useDispatch()
  const [votedRoom, setVotedRoom] = useState(false)
  const [checked, setChecked] = useState('')

  useEffect(() => {
    currentUser?.votedRooms.forEach(votedRoomId => {
      currentUser?.votedCandidates.forEach(candidateId => {
        candidates?.forEach(candidateInRoom => {
          if (votedRoomId === roomId && candidateInRoom._id === candidateId) {
            setVotedRoom(true)
            setChecked(candidateId)
          }
        })
      })
    })
  }, [roomId, currentUser?.votedRooms, currentUser?.votedCandidates, candidates])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(startVoting({
      userId: currentUser._id,
      roomId: roomId,
      candidateId: checked,
    }))
  }

  return (
    <div className="col col-12 col-xl-5 col-lg-5 col-md-6 offset-lg-1 col-sm-12  text-center">
      <h3 className="mt-3">Choose your favorite candidate!</h3>
      <form onSubmit={handleSubmit}>
        <div className={styles.candidatesList}>
          {
            votedRoom &&
            <img
              className={styles.votedImg}
              src="https://digitalchamber.org/wp-content/uploads/2018/11/CHD-18005-18-D2-Voting-Graphic-Blog.png"
              alt="voted"/>
          }
          <ul>

            {
              candidates?.map(candidate => (
                <li className={checked === candidate._id ? styles.active : ''} key={candidate._id}
                    onClick={() => setChecked(candidate._id)}>
                  <div className={styles.avatar}>
                    <img
                      src="https://www.etexstore.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
                      alt="user"/>
                  </div>
                  <div className={styles.content}>
                    <p>Name: {candidate.name}</p>
                    <p>Email: {candidate.email}</p>
                  </div>
                  <input
                    id={candidate._id}
                    type="radio"
                    name={candidate._id}
                    value={candidate._id}
                    checked={checked === candidate._id}
                    onChange={(e) => setChecked(e.target.value)}
                  />
                </li>
              ))
            }

          </ul>
        </div>
        <div>
          <Button
            loading={isLoading}
            disabled={!checked || votedRoom}
            color="blue"
            type="submit"
            content="Send Vote"
          />
        </div>
      </form>
    </div>
  )
}

export default VoteRoomDetailsRightSide