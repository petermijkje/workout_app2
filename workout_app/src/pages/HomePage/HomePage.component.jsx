import React from 'react'
import './HomePage.styles.scss'
import Photo from '../../workout.png'

function HomePage() {
  return (
    <div className="homepage">
      <img className="image" src={Photo} alt="Lady in Jumping Lunge" />
      <h1>RETRAIN</h1>
      <div className="homepage-text">
        <span>
          A fitness app for
          <br /> your future
        </span>
      </div>
    </div>
  )
}

export default HomePage
