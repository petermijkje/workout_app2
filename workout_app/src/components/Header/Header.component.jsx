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
  <div>
    {/* <Link  className="menu-icon" id="icon-container"> */}
    <span className="header-text" style={{ position: 'absolute' }}>
      <li>Login</li>
      <li>about</li>
      <li>Contact</li>
    </span>
    {/* </Link> */}
  </div>
)

export default Header
