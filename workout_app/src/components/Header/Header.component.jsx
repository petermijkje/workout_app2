import React from 'react'
import { Menu } from 'react-feather'
import { Link } from 'react-router-dom'

import './Header.styles.scss'

//change classnames on all

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="menu-icon" id="icon-container">
        <Menu color="black" />
        <span className="header-text"></span>
      </Link>
      <Link to="/contact">
        <span className="header-text">contact</span>
      </Link>
    </div>
  )
}

export default Header
