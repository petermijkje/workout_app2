import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage.component'
import Header from './components/Header/Header.component.jsx'
import Profile from './components/profile/profile.component.jsx'
import Login from './components/login/login.component.jsx'

import './App.scss'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/profile" component={Profile} />
            <Route path="/Login" component={Login} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
