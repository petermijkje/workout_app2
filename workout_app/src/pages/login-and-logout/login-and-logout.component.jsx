import React from 'react'
import CustomButton from '../../components/custom-button/custom-button.component'
import { BsEyeSlashFill } from 'react-icons/bs'

import './login-and-logout.styles.scss'
import RetrainLogo from '../../components/retrain-logo/RetrainLogo.component'

function Login() {
  return (
    <div className="login">
      <RetrainLogo />
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
          <hr className="hr-email" />
          <label>
            <input
              className="password"
              type="password"
              name="email"
              placeholder="Password"
            />
          </label>
          <hr className="hr-password" />
          <BsEyeSlashFill className="eye-slash" />
          <CustomButton />
        </form>
      </div>
    </div>
  )
}

export default Login
