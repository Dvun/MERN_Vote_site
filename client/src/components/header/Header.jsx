import React from 'react'
import styles from './header.module.scss'
import {NavLink} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {userLogout} from '../../store/actions/authActions'

const Header = () => {
  const dispatch = useDispatch()
  const {user} = useSelector(({authReducers}) => authReducers)


  return (
    <header className={styles.header}>
      <div/>
      <div className="container">
        <h1>Vaalit</h1>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <NavLink className="navbar-brand" to="/">VAALIT</NavLink>
          <div className="collapse navbar-collapse justify-content-between">

            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/rooms">Rooms</NavLink>
              </li>
              {
                user?.role.includes('admin') || user?.role.includes('candidate') ?
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/dashboard/rooms">Rooms Dashboard</NavLink>
                  </li>
                  :
                  null
              }
              {
                user?.role.includes('admin') || user?.role.includes('candidate') ?
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/dashboard/candidates">Candidates</NavLink>
                  </li>
                  :
                  null
              }
            </ul>

            <ul className="navbar-nav">

              {
                user ?
                  <>
                    <li className={`nav-item ${styles.username}`}>
                      <h4 className="nav-link active text-white" aria-current="page">Hello, {user.name}</h4>
                    </li>

                    <li className="nav-item">
                      <NavLink className="nav-link" to="/" onClick={() => dispatch(userLogout())}>Logout</NavLink>
                    </li>
                  </>
                  :
                  <>
                    <li className="nav-item">
                      <NavLink className="nav-link active" aria-current="page" to="/login">Login</NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink className="nav-link" to="/register">Register</NavLink>
                    </li>
                  </>
              }

            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header