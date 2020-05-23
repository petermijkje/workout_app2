import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdMenu } from 'react-icons/io'

import './Header.styles.scss'

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      showResults: false,
    }
    this.toggleDiv = this.toggleDiv.bind(this)
  }
  toggleDiv = () => {
    const { showResults } = this.state
    this.setState({ showResults: !showResults })
  }
  render() {
    return (
      <div className="header">
        <IoMdMenu id="icon-container" onClick={this.toggleDiv} />
        {this.state.showResults && <Results />}
      </div>
    )
  }
}

const Results = () => (
  <div className="menu-drop">
    <div className="header-text" style={{ position: 'absolute' }}>
      <div className="header-text-div">
        <Link to="/" className="header-link">
          <li>Home</li>
        </Link>
      </div>
      <div className="header-text-div">
        <Link to="/login" className="header-link">
          <li>Login</li>
        </Link>
      </div>
      <div className="header-text-div">
        <Link to="/about" className="header-link">
          <li>About</li>
        </Link>
      </div>
      <div className="header-text-div">
        <Link to="/contact" className="header-link">
          <li>Contact</li>
        </Link>
      </div>
    </div>
  </div>
)

export default Header
