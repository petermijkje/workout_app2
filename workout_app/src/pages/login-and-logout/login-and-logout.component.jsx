import React, { useState } from 'react'
import CustomButton from '../../components/custom-button/custom-button.component'
import { BsEyeSlashFill, BsEyeFill } from 'react-icons/bs'

import './login-and-logout.styles.scss'
import RetrainLogo from '../../components/retrain-logo/RetrainLogo.component'

function Login() {
  //toggle function/state for show/hide password
  const [eyeSlashIcon, eyeSlash] = useState(true)
  function handleEyeSlash() {
    eyeSlash(!eyeSlashIcon)
  }
  return (
    <div className="login">
      <RetrainLogo />
      <div className="login-div">
        <div className="login-title">Log in</div>
        <form className="form-inputs">
          <label>
            <input
              className="email"
              type="text"
              name="email"
              placeholder="Email"
            />
          </label>
          <hr className="hr-email" />
          {/* switch case to show or hide password input */}
          <div className="eye-slash" onClick={handleEyeSlash}>
            {eyeSlashIcon ? (
              <div>
                <label>
                  <input
                    className="password"
                    type="password"
                    name="email"
                    placeholder="Password"
                  />
                </label>
                <BsEyeSlashFill className="eye" />
              </div>
            ) : (
              <div>
                <label>
                  <input
                    className="password"
                    type="text"
                    name="email"
                    placeholder="Password"
                  />
                </label>
                <BsEyeFill className="eye" />
              </div>
            )}
          </div>
          <hr className="hr-password" />
        </form>
      </div>
      <CustomButton />
    </div>
  )
}

export default Login
