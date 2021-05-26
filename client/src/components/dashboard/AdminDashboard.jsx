import React from 'react'
import CreateNewRoom from './CreateNewRoom'

const AdminDashboard = () => {
  return (
    <>
      <h2>Create New Vote Room</h2>
      <div className="row">
        <div className="col col-md-6">
          <CreateNewRoom/>
        </div>
        <div className="col col-md-6">
        </div>
      </div>
    </>
  )
}

export default AdminDashboard