import React from 'react'
import { useState } from 'react'

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
  <div>
    Profile Stats Component
    <span>{name}</span>
    <span>{age}</span>
    <span>Height</span>
    <span>Sex</span>
    <span>Weight</span>
    <span>current goal:</span>
    <span>on track?</span>
  </div>
)

export default ProfileStats
