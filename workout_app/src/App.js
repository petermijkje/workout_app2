import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage.component'
import Header from './components/Header/Header.component.jsx'
import WorkoutPhoto from './homepage.jpg'

import './App.scss'

function App() {
  return (
    <div className="App">
      <img className="workout-photo" src={WorkoutPhoto} alt="workout" />
      <Header />
      <Switch>
        <Route />
        <HomePage />
      </Switch>
    </div>
  )
}

export default App
