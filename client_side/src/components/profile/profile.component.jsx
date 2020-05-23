import React from 'react'
import ProfileStats from '../profile-stats/profile-stats.component'

import './profile.styles.scss'
import MyResponsiveLine from '../statistics/statistics.component'

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
      data: [
        {
          id: 'Bench Press',
          color: 'hsl(232, 70%, 50%)',
          data: [
            {
              x: '2/1',
              y: 77,
            },
            {
              x: '2/15',
              y: 8,
            },
            {
              x: '3/1',
              y: 111,
            },
            {
              x: '3/15',
              y: 289,
            },
            {
              x: '4/1',
              y: 134,
            },
            {
              x: '4/15',
              y: 204,
            },
            {
              x: '5/1',
              y: 197,
            },
            {
              x: '5/15',
              y: 266,
            },
            {
              x: '6/1',
              y: 287,
            },
            {
              x: '6/15',
              y: 232,
            },
            {
              x: '7/1',
              y: 274,
            },
            {
              x: '7/15',
              y: 62,
            },
          ],
        },
        {
          id: 'Squat',
          color: 'hsl(220, 70%, 50%)',
          data: [
            {
              x: '2/1',
              y: 45,
            },
            {
              x: '2/15',
              y: 87,
            },
            {
              x: '3/1',
              y: 223,
            },
            {
              x: '3/15',
              y: 261,
            },
            {
              x: '4/1',
              y: 144,
            },
            {
              x: '4/15',
              y: 126,
            },
            {
              x: '5/1',
              y: 39,
            },
            {
              x: '5/15',
              y: 235,
            },
            {
              x: '6/1',
              y: 174,
            },
            {
              x: '6/15',
              y: 116,
            },
            {
              x: '7/1',
              y: 26,
            },
            {
              x: '7/15',
              y: 50,
            },
          ],
        },
        {
          id: 'Deadlift',
          color: 'hsl(252, 70%, 50%)',
          data: [
            {
              x: '2/1',
              y: 130,
            },
            {
              x: '2/15',
              y: 133,
            },
            {
              x: '3/1',
              y: 295,
            },
            {
              x: '3/15',
              y: 258,
            },
            {
              x: '4/1',
              y: 200,
            },
            {
              x: '4/15',
              y: 147,
            },
            {
              x: '5/1',
              y: 39,
            },
            {
              x: '5/15',
              y: 279,
            },
            {
              x: '6/1',
              y: 228,
            },
            {
              x: '6/15',
              y: 231,
            },
            {
              x: '7/1',
              y: 112,
            },
            {
              x: '7/15',
              y: 118,
            },
          ],
        },
        {
          id: 'Shoulder Press',
          color: 'hsl(64, 70%, 50%)',
          data: [
            {
              x: '2/1',
              y: 198,
            },
            {
              x: '2/15',
              y: 286,
            },
            {
              x: '3/1',
              y: 215,
            },
            {
              x: '3/15',
              y: 39,
            },
            {
              x: '4/1',
              y: 220,
            },
            {
              x: '4/15',
              y: 251,
            },
            {
              x: '5/1',
              y: 267,
            },
            {
              x: '5/15',
              y: 277,
            },
            {
              x: '6/1',
              y: 33,
            },
            {
              x: '6/15',
              y: 3,
            },
            {
              x: '7/1',
              y: 75,
            },
            {
              x: '7/15',
              y: 207,
            },
          ],
        },
        {
          id: 'Bent Over Row',
          color: 'hsl(156, 70%, 50%)',
          data: [
            {
              x: '2/1',
              y: 123,
            },
            {
              x: '2/15',
              y: 141,
            },
            {
              x: '3/1',
              y: 145,
            },
            {
              x: '3/15',
              y: 35,
            },
            {
              x: '4/1',
              y: 44,
            },
            {
              x: '4/15',
              y: 43,
            },
            {
              x: '5/1',
              y: 250,
            },
            {
              x: '5/15',
              y: 122,
            },
            {
              x: '6/1',
              y: 175,
            },
            {
              x: '6/15',
              y: 34,
            },
            {
              x: '7/1',
              y: 230,
            },
            {
              x: '7/15',
              y: 89,
            },
          ],
        },
      ],
    }
  }

  render() {
    const { ...allProfileProps } = this.state
    const { data } = this.state
    return (
      <div className="profile">
        My Profile
        <ProfileStats {...allProfileProps} />
        <MyResponsiveLine data={data} />
      </div>
    )
  }
}
export default Profile
