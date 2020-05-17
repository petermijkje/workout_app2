import React from 'react'
import './HomePage.styles.scss'
import Photo from '../../workout.png'

import CustomButton from '../../components/custom-button/custom-button.component'

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
      <CustomButton />
    </div>
  )
}

export default HomePage
