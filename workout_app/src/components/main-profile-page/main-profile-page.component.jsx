import React from 'react'
import Profile from '../profile/profile.component'

//images
import WorkoutPhoto from '../../images/homepage2.jpg'
import Home from '../../images/home.png'
import Man from '../../images/man.png'
import Activity from '../../images/activity.png'
import Dumbbell from '../../images/dumbbell.png'

import './main-profile-page.styles.scss'

class MainProfile extends React.Component {
  constructor() {
    super()
    this.state = {
      home: false,
      workout: false,
      activity: false,
      profile: false,
    }
    this.handleHome = this.handleHome.bind(this)
    this.handleWorkout = this.handleWorkout.bind(this)
    this.handleActivity = this.handleActivity.bind(this)
    this.handleProfile = this.handleProfile.bind(this)
  }
  handleHome() {
    const { home } = this.state
    this.setState({ home: !home })
    this.setState({ workout: false })
    this.setState({ activity: false })
    this.setState({ profile: false })
  }

  handleWorkout() {
    const { workout } = this.state
    this.setState({ workout: !workout })
    this.setState({ home: false })
    this.setState({ activity: false })
    this.setState({ profile: false })
  }
  handleActivity() {
    const { activity } = this.state
    this.setState({ activity: !activity })
    this.setState({ workout: false })
    this.setState({ home: false })
    this.setState({ profile: false })
  }
  handleProfile() {
    const { profile } = this.state
    this.setState({ profile: !profile })
    this.setState({ workout: false })
    this.setState({ activity: false })
    this.setState({ home: false })
  }
  render() {
    const { home, workout, activity, profile } = this.state
    return (
      <div>
        <div className="main-page">
          <img src={WorkoutPhoto} className="featured-workout" />
          <span className="featured-header">
            8 WEEK STRENGTH TRAINING REGIMEN
          </span>
          <div className="featured-banner">
            <span className="featured-banner-text">FEATURED WORKOUT</span>
          </div>
          <div className="other-featured">Other popular programs</div>
        </div>
        {home ? <Profile /> : null}
        {workout ? <div>Workout Component</div> : null}
        {activity ? <div>Activity Component</div> : null}
        {profile ? <div>Profile Component</div> : null}
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
              <img
                className="footer-icon"
                src={Activity}
                alt="Activity Icon"
                onClick={this.handleActivity}
              />
            </div>
            <div>
              <img
                className="footer-icon"
                src={Man}
                alt="Profile Icon"
                onClick={this.handleProfile}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainProfile
