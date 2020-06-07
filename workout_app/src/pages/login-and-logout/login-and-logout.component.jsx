import React from 'react'

import './login-and-logout.styles.scss'
import RetrainLogo from '../../components/retrain-logo/RetrainLogo.component'
import LoginAndSignUp from '../../components/login-and-sign-up/login-and-sign-up.component'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
    }
  }
  render() {
    const { isLoggedIn } = this.state
    return (
      <div>
        {isLoggedIn ? (
          <div> main Page </div>
        ) : (
          <div className="login">
            <RetrainLogo />
            <LoginAndSignUp />
          </div>
        )}
      </div>
    )
  }
}

export default Login
