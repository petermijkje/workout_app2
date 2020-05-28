import React from 'react'

import './login-and-logout.styles.scss'
import RetrainLogo from '../../components/retrain-logo/RetrainLogo.component'
import LoginAndSignUp from '../../components/login-and-sign-up/login-and-sign-up.component'

function Login() {
  return (
    <div className="login">
      <RetrainLogo />
      <LoginAndSignUp />
    </div>
  )
}

export default Login
