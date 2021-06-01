import React from 'react'

const VoteRoomDetailsLeftSide = ({currentRoom}) => {
  return (
    <>
      <div className="row mb-2 mb-sm-2 mb-md-3 mb-lg-3">
        <div className="col-5 col-sm-3 col-md-4 col-lg-3 col-xl-3">
          <h4>Room name:</h4>
        </div>
        <div className="col-7 col-sm-9 col-md-8 col-lg-9 col-xl-9 text-start">
          {currentRoom?.roomName}
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-5 col-sm-3 col-lg-3 col-xl-3">
          <h4>Description:</h4>
        </div>
        <div className="col-7 col-sm-9 col-lg-9 col-xl-9 text-start">
          {currentRoom?.description}
        </div>
      </div>
    </>
  )
}

export default VoteRoomDetailsLeftSide