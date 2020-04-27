import React from 'react'
import { Menu, LogOut, User } from 'react-feather'

import './Header.styles.scss'

//change classnames on all

function Header() {
  return (
    <div className="header">
      <div className="menu-icon" id="icon-container">
        <Menu />
        <span className="header-text">Menu</span>
      </div>
      <div className="sign-in-icon" id="icon-container">
        <User />
        <span className="header-text">Profile</span>
      </div>
      <div className="sign-out-icon" id="icon-container">
        <LogOut />
        <span className="header-text">Login</span>
      </div>
    </div>
  )
}

export default Header
