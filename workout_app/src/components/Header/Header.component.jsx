import React from 'react'
import { Menu, LogOut, User } from 'react-feather'

import './Header.styles.scss'

//change classnames on all span to center texts in div

function Header() {
  return (
    <div className="header">
      <div className="menu-icon" id="icon-container">
        <Menu />
        <span className="header">Menu</span>
      </div>
      <div className="sign-in-icon" id="icon-container">
        <User />
        <span className="sign-in-header">Profile</span>
      </div>
      <div className="sign-out-icon" id="icon-container">
        <LogOut />
        <span className="sign-out-header">Logout</span>
      </div>
    </div>
  )
}

export default Header
