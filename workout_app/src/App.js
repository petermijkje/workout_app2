import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage.component'
import Header from './components/Header/Header.component.jsx'
import Contact from './pages/Contact/Contact.component.jsx'
import About from './pages/About/About.component.jsx'
import Profile from './components/profile/profile.component.jsx'
import LoginAndLogout from './pages/login-and-logout/login-and-logout.component.jsx'

import './App.scss'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
        <Route path="/profile" component={Profile} />
        <Route path="/Login" component={LoginAndLogout} />
      </div>
    </Router>
  )
}

export default App
