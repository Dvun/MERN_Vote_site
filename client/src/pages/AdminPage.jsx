import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import AdminDashboard from '../components/dashboard/AdminDashboard'
import {Divider} from 'semantic-ui-react'

const AdminPage = ({history}) => {
  const {user} = useSelector(({authReducers}) => authReducers)

  useEffect(() => {
    user?.role.includes('user') && history.push('/')
  },[user?.role, history])


  return (
    <div>
      <div className="container mt-5">
        <h1>Admin Page !</h1>
        <Divider/>
        <AdminDashboard/>
      </div>
    </div>
  )
}

export default AdminPage