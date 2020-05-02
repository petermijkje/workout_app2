import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage.component'
import Header from './components/Header/Header.component.jsx'
import Profile from './components/profile/profile.component.jsx'
import LoginAndLogout from './pages/login-and-logout/login-and-logout.component.jsx'
// import ErrorPage from './component/error'

import './App.scss'

function App() {
  return (
    <Router>
      <div className="App">
        <p>Workout app</p>
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/profile" component={Profile} />
            <Route path="/Login" component={LoginAndLogout} />
            <Route component={Error} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
