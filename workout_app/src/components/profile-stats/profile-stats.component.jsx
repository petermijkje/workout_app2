import React from 'react'
import { useState } from 'react'

import './profile-stats.styles.scss'

function ProfileStats() {
  const [name] = useState('Your Name Here')
  return (
    <div>
      Profile Stats Component
      <span>{name}</span>
      <span>Age</span>
      <span>Height</span>
      <span>Sex</span>
      <span>Weight</span>
      <span>current goal:</span>
      <span>on track?</span>
    </div>
  )
}

export default ProfileStats
