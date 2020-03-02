import React from 'react'
import App from './App'
import { Route, Switch } from 'react-router-dom'
import CarQuery from './components/CarQuery'

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path='/'>
          <CarQuery />
        </Route>
      </Switch>
    </div>
  )
}

export default Routes
