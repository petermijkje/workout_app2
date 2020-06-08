import React from 'react'

import './profile-stats.styles.scss'

const ProfileStats = ({
  name,
  age,
  height,
  sex,
  weight,
  currentGoal,
  onTrack,
}) => (
  <div className="profile-stats">
    <h1>Profile Stats</h1>
    <span>{name}</span>
    <span>{age}</span>
    <span>{height}</span>
    <span>{sex}</span>
    <span>{weight}</span>
    <span>{currentGoal}</span>
    <span>{onTrack}</span>
  </div>
)

export default ProfileStats
