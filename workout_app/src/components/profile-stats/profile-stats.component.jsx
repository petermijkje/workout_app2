import React from 'react'

import './profile-stats.styles.scss'

function ProfileStats() {
  return (
    <div>
      Profile Stats Component
      <span>Name</span>
      <span>Age</span>
      <span>Height</span>
      <span>Sex</span>
      <span>Weight</span>
      <span>Current Goal: </span>
      <span>on track?</span>
    </div>
  )
}

export default ProfileStats

// function ProfileStats() {
//     const [count, setCount] = useState(0)

//     function handleAlertClick() {
//       setTimeout(() => {
//         alert('You clicked on: ' + count)
//       }, 3000)
//     }

//     return (
//       <div>
//         <p>You clicked {count} times</p>
//         <button onClick={() => setCount(count + 1)}>Click me</button>
//         <button onClick={handleAlertClick}>Show alert</button>
//       </div>
//     )
//   }

//   export default ProfileStats
