import React from 'react'
import ProfileStats from '../profile-stats/profile-stats.component'

import './profile.styles.scss'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'John',
      age: '30',
      height: 70,
      sex: 'Male',
      weight: '200',
      currentGoal: 'Lose Fat',
      onTrack: 'Yes',
    }
  }
  render() {
    const { ...allProfileProps } = this.state
    return (
      <div className="profile">
        My Profile
        <ProfileStats {...allProfileProps} />
      </div>
    )
  }
}
export default Profile
