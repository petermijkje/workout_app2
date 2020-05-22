import React, { useState } from 'react'
import CustomButton from '../../components/custom-button/custom-button.component'
import { BsEyeSlashFill, BsEyeFill } from 'react-icons/bs'

import './login-and-logout.styles.scss'
import RetrainLogo from '../../components/retrain-logo/RetrainLogo.component'

function Login() {
  //
  const eyeVar = <BsEyeFill />
  const eyeSlashVar = <BsEyeSlashFill />
  //
  const [eyeSlashIcon, eyeSlash] = useState(eyeSlashVar)
  function handleEyeSlash() {
    eyeSlash(eyeSlashIcon === eyeSlashVar ? eyeVar : eyeSlashVar)
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
          <label>
            <input
              className="password"
              type="password"
              name="email"
              placeholder="Password"
            />
          </label>
          <hr className="hr-password" />
          <div className="eye-slash" onClick={handleEyeSlash}>
            {eyeSlashIcon}
          </div>
        </form>
      </div>
      <CustomButton />
    </div>
  )
}

export default Login
