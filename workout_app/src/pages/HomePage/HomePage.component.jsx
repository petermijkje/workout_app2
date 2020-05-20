import React from 'react'
import './HomePage.styles.scss'
import { Link } from 'react-router-dom'
import Photo from '../../workout.png'
import RetrainLogo from '../../components/retrain-logo/RetrainLogo.component'

import CustomButton from '../../components/custom-button/custom-button.component'

function HomePage() {
  return (
    <div className="homepage">
      <RetrainLogo />
      <img className="image" src={Photo} alt="Lady in Jumping Lunge" />
      <Link to="/login">
        <CustomButton />
      </Link>
      <div className="sign-up-text">
        Don't have an account?
        <Link to="/login">
          <u>SIGN UP</u>
        </Link>
      </div>
    </div>
  )
}

export default HomePage
