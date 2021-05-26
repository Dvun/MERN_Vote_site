import React from 'react'
import VoteRoomsList from '../components/voteRooms/VoteRoomsList'

const VoteRooms = () => {
  return (
    <div className='container mt-5'>
      <h1 className="mb-5">Vote rooms !</h1>
      <VoteRoomsList/>
    </div>
  )
}

export default VoteRooms