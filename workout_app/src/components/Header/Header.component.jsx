import React from 'react'
import { Menu, LogOut, User } from 'react-feather'
import { Link } from 'react-router-dom'

import './Header.styles.scss'

//change classnames on all

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="menu-icon" id="icon-container">
        <Menu />
        <span className="header-text">Home</span>
      </Link>
      <Link to="/profile" className="sign-in-icon" id="icon-container">
        <User />
        <span className="header-text">Profile</span>
      </Link>
      <Link to="/login" className="sign-out-icon" id="icon-container">
        <LogOut />
        <span className="header-text">Login</span>
      </Link>
    </div>
  )
}

export default Header
