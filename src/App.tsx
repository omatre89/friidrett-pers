import './App.css';
import React from 'react'
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom'
import { Home } from './components/home/Home'

export const App = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
