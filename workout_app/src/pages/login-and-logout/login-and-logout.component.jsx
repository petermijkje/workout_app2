import React from 'react'

import './login-and-logout.styles.scss'
import RetrainLogo from '../../components/retrain-logo/RetrainLogo.component'
import LoginAndSignUp from '../../components/login-and-sign-up/login-and-sign-up.component'
import MainProfile from '../../components/main-profile-page/main-profile-page.component'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: true,
    }
  }
  render() {
    const { isLoggedIn } = this.state
    return (
      <div>
        {isLoggedIn ? (
          <div>
            <MainProfile />
          </div>
        ) : (
          <div className="login">
            <RetrainLogo />
            <LoginAndSignUp />
            <button onClick={() => this.setState({ isLoggedIn: true })}>
              bypass
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default Login
