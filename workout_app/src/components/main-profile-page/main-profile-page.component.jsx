import React from 'react'
import Profile from '../profile/profile.component'

//components
import ActivityComponent from '../activity/activity.component'

//images
import WorkoutPhoto from '../../images/homepage2.jpg'
import Home from '../../images/home.png'
import Man from '../../images/man.png'
import Activity from '../../images/activity.png'
import Dumbbell from '../../images/dumbbell.png'

import './main-profile-page.styles.scss'
import ProfileStats from '../profile-stats/profile-stats.component'

class MainProfile extends React.Component {
  constructor() {
    super()
    this.state = {
      blueLine: true,
      secondBlueLine: false,
      workout: false,
      activity: false,
      profile: false,
    }
    this.handleBlueLine = this.handleBlueLine.bind(this)
    this.handleSecondBlueLine = this.handleSecondBlueLine.bind(this)
    this.handleHome = this.handleHome.bind(this)
    this.handleWorkout = this.handleWorkout.bind(this)
    this.handleActivity = this.handleActivity.bind(this)
    this.handleProfile = this.handleProfile.bind(this)
  }
  handleHome() {
    this.setState({ workout: false })
    this.setState({ activity: false })
    this.setState({ profile: false })
  }

  handleWorkout() {
    const { workout } = this.state
    this.setState({ workout: !workout })
    this.setState({ activity: false })
    this.setState({ profile: false })
  }
  handleActivity() {
    const { activity } = this.state
    this.setState({ activity: !activity })
    this.setState({ workout: false })
    this.setState({ profile: false })
  }
  handleProfile() {
    const { profile } = this.state
    this.setState({ profile: !profile })
    this.setState({ workout: false })
    this.setState({ activity: false })
  }

  handleBlueLine() {
    const { blueLine, secondBlueLine } = this.state
    this.setState({ blueLine: !blueLine })
    this.setState({ secondBlueLine: !secondBlueLine })
  }
  handleSecondBlueLine() {
    const { secondBlueLine, blueLine } = this.state
    this.setState({ secondBlueLine: !secondBlueLine })
    this.setState({ blueLine: !blueLine })
  }
  render() {
    const { blueLine, secondBlueLine, workout, activity, profile } = this.state
    return (
      <div>
        <div className="main-page">
          <span className="homepage-workout" onClick={this.handleBlueLine}>
            WORKOUTS
          </span>
          <span
            className="homepage-featured"
            onClick={this.handleSecondBlueLine}
          >
            FEATURED
          </span>
          {blueLine ? <div className="blue-line"></div> : null}
          {secondBlueLine ? <div className="second-blue-line"></div> : null}
          <img src={WorkoutPhoto} className="featured-workout" />
          <span className="featured-header">
            8 WEEK STRENGTH TRAINING REGIMEN
          </span>
          <div className="featured-banner">
            <span className="featured-banner-text">FEATURED WORKOUT</span>
          </div>
          <div className="other-featured">Other popular programs</div>
        </div>
        {workout ? <Profile /> : null}
        {activity ? <ActivityComponent /> : null}
        {profile ? (
          <div>
            <ProfileStats />
          </div>
        ) : null}
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
