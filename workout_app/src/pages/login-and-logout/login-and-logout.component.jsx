import React from 'react'
import CustomButton from '../../components/custom-button/custom-button.component'

import './login-and-logout.styles.scss'

function Login() {
  return (
    <div className="login">
      <div className="login-div">
        <div className="login-title">Log in</div>
        <form>
          <label>
            <input
              className="email"
              type="text"
              name="email"
              placeholder="Email"
            />
          </label>
          <hr />
          <label>
            <input
              className="password"
              type="password"
              name="email"
              placeholder="Password"
            />
          </label>
          <hr />
          <CustomButton />
        </form>
      </div>
    </div>
  )
}

export default Login
