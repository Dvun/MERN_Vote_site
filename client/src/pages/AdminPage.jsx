import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {Divider} from 'semantic-ui-react'
import CreateNewRoom from '../components/dashboard/CreateNewRoom'
import CreateNewCandidate from '../components/dashboard/CreateNewCandidate'
import CandidatesList from '../components/dashboard/CandidatesList'

const AdminPage = ({history, location}) => {
  const {user} = useSelector(({authReducers}) => authReducers)

  useEffect(() => {
    user?.role.includes('user') && history.push('/')
  }, [user?.role, history])


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