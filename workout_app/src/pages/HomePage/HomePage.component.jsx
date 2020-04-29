import React from 'react'
import './HomePage.styles.scss'
// import WorkoutPhoto from '../../homepage.jpg'

function HomePage() {
  return (
    <div className="homepage">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,96L48,122.7C96,149,192,203,288,208C384,213,480,171,576,176C672,181,768,235,864,234.7C960,235,1056,181,1152,154.7C1248,128,1344,128,1392,128L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div className="workout-picture-div">
        {/* <img className="workout-photo" src={WorkoutPhoto} alt="workout" /> */}
      </div>
    </div>
  )
}

export default HomePage
