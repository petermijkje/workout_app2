import React from 'react'
import Profile from '../profile/profile.component'
import Home from '../../images/home.png'
import Man from '../../images/man.png'
import Activity from '../../images/activity.png'
import Dumbbell from '../../images/dumbbell.png'

import './main-profile-page.styles.scss'

class MainProfile extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div>
        <Profile />
        <div className="footer">
          <div className="icon-container">
            <div>
              <img className="footer-icon" src={Home} alt="Home Icon" />
            </div>
            <div>
              <img className="footer-icon" src={Dumbbell} alt="Dumbbell Icon" />
            </div>
            <div>
              <img className="footer-icon" src={Activity} alt="Activity Icon" />
            </div>
            <div>
              <img className="footer-icon" src={Man} alt="Profile Icon" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainProfile
