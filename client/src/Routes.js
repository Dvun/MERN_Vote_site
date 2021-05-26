import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {publicRoutes} from './utils/publicRoutes'
import {privateRoutes} from './utils/privateRoutes'

const Routes = () => {
  const {user} = useSelector(({authReducers}) => authReducers)

  return (
    <>
      {
        user ?
          <Switch>
            {privateRoutes.map(({path, component}) => (
              <Route key={path} path={path} component={component} exact/>
            ))}
            <Redirect to="/"/>
          </Switch>
          :
          <Switch>
            {publicRoutes.map(({path, component}) => (
              <Route key={path} path={path} component={component} exact/>
            ))}
            <Redirect to="/login"/>
          </Switch>
      }
    </>
  )
}

export default Routes