import React from 'react'
import {Divider} from 'semantic-ui-react'
import CreateNewRoom from '../components/dashboard/room/CreateNewRoom'
import CreateNewCandidate from '../components/dashboard/candidate/CreateNewCandidate'
import CandidatesList from '../components/dashboard/candidate/CandidatesList'
import RoomsList from '../components/dashboard/room/RoomsList'

const AdminPage = ({location}) => {


  return (
    <div>
      <div className="container mt-5">
        <h1>Admin Page !</h1>
        <Divider/>
        {
          location.pathname === '/dashboard/rooms' &&
          <>
            <div className="row">
              <CreateNewRoom/>
              <RoomsList/>
            </div>
          </>
        }

        {
          location.pathname === '/dashboard/candidates' &&
          <>
            <div className="row">
              <CreateNewCandidate/>
              <CandidatesList/>
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default AdminPage