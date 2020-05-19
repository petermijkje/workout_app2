import React from 'react'
import './HomePage.styles.scss'
import Photo from '../../workout.png'
import RetrainLogo from '../../components/retrain-logo/RetrainLogo.component'

import CustomButton from '../../components/custom-button/custom-button.component'

function HomePage() {
  return (
    <div className="homepage">
      <RetrainLogo />
      <img className="image" src={Photo} alt="Lady in Jumping Lunge" />
      <CustomButton />
      <div className="sign-up-text">
        Don't have an account? <u to="login">SIGN UP</u>
      </div>
    </div>
  )
}

export default HomePage
