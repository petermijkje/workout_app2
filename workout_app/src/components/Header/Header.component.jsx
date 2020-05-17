import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdMenu } from 'react-icons/io'

import './Header.styles.scss'

//change classnames on all
function showMenu() {
  return <div>contacts</div>
}

class Header extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="header">
        <Link to="/" className="menu-icon" id="icon-container">
          <IoMdMenu
            color="black"
            size="36px"
            strokeWidth="3px"
            onClick={showMenu}
          />
          <span className="header-text"></span>
        </Link>
        {/* <Link to="/contact">
          <span className="header-text">contact</span>
        </Link> */}
      </div>
    )
  }
}

export default Header
