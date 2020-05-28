import React, { useState } from 'react'
import CustomButton from '../../components/custom-button/custom-button.component'
import { BsEyeSlashFill, BsEyeFill } from 'react-icons/bs'

function LoginAndSignUp() {
  //toggle between login and signup
  const [login, switchInstance] = useState(false)
  function switchLogin() {
    switchInstance(!login)
  }
  //toggle function/state for show/hide password
  const [eyeSlashIcon, eyeSlash] = useState(false)
  function handleEyeSlash() {
    eyeSlash(!eyeSlashIcon)
  }
  //logic for email
  const [email, setEmail] = useState('')
  function handleEmail(e) {
    setEmail(e.target.value)
  }
  //logic for password
  const [password, setPassword] = useState('')
  function handlePassword(e) {
    setPassword(e.target.value)
  }

  return (
    <div>
      <div className="login-div">
        <div>
          {login ? (
            <div className="login-title">Log in</div>
          ) : (
            <div className="sign-up-title">Sign Up</div>
          )}
        </div>
        <form className="form-inputs">
          <label>
            <input
              className="email"
              type="text"
              name="email"
              placeholder="email"
              value={email}
              onChange={handleEmail}
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
                    value={password}
                    placeholder="Password"
                    onChange={handlePassword}
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
      <div className="sign-up-text">
        Already have an account?{' '}
        <u onClick={switchLogin}>{login ? 'SIGNUP' : 'LOGIN'}</u>
      </div>
    </div>
  )
}

export default LoginAndSignUp
