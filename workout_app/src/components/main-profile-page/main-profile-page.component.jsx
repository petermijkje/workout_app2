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
    this.state = {
      home: true,
      workout: false,
      activity: false,
      profile: false,
    }
    this.handleHome = this.handleHome.bind(this)
    this.handleWorkout = this.handleWorkout.bind(this)
  }
  handleHome() {
    const { home } = this.state
    this.setState({ home: !home })
  }

  handleWorkout() {
    const { workout } = this.state
    this.setState({ workout: !workout })
  }

  render() {
    const { home, workout } = this.state
    return (
      <div>
        {home ? <Profile /> : null}
        {workout ? <Profile /> : null}
        <div className="footer">
          <div className="icon-container">
            <div>
              <img
                className="footer-icon"
                src={Home}
                alt="Home Icon"
                onClick={this.handleHome}
              />
            </div>
            <div>
              <img
                className="footer-icon"
                src={Dumbbell}
                alt="Dumbbell Icon"
                onClick={this.handleWorkout}
              />
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
