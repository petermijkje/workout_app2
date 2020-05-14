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
          id: 'japan',
          color: 'hsl(232, 70%, 50%)',
          data: [
            {
              x: 'plane',
              y: 77,
            },
            {
              x: 'helicopter',
              y: 8,
            },
            {
              x: 'boat',
              y: 111,
            },
            {
              x: 'train',
              y: 289,
            },
            {
              x: 'subway',
              y: 134,
            },
            {
              x: 'bus',
              y: 204,
            },
            {
              x: 'car',
              y: 197,
            },
            {
              x: 'moto',
              y: 266,
            },
            {
              x: 'bicycle',
              y: 287,
            },
            {
              x: 'horse',
              y: 232,
            },
            {
              x: 'skateboard',
              y: 274,
            },
            {
              x: 'others',
              y: 62,
            },
          ],
        },
        {
          id: 'france',
          color: 'hsl(220, 70%, 50%)',
          data: [
            {
              x: 'plane',
              y: 45,
            },
            {
              x: 'helicopter',
              y: 87,
            },
            {
              x: 'boat',
              y: 223,
            },
            {
              x: 'train',
              y: 261,
            },
            {
              x: 'subway',
              y: 144,
            },
            {
              x: 'bus',
              y: 126,
            },
            {
              x: 'car',
              y: 39,
            },
            {
              x: 'moto',
              y: 235,
            },
            {
              x: 'bicycle',
              y: 174,
            },
            {
              x: 'horse',
              y: 116,
            },
            {
              x: 'skateboard',
              y: 26,
            },
            {
              x: 'others',
              y: 50,
            },
          ],
        },
        {
          id: 'us',
          color: 'hsl(252, 70%, 50%)',
          data: [
            {
              x: 'plane',
              y: 130,
            },
            {
              x: 'helicopter',
              y: 133,
            },
            {
              x: 'boat',
              y: 295,
            },
            {
              x: 'train',
              y: 258,
            },
            {
              x: 'subway',
              y: 200,
            },
            {
              x: 'bus',
              y: 147,
            },
            {
              x: 'car',
              y: 39,
            },
            {
              x: 'moto',
              y: 279,
            },
            {
              x: 'bicycle',
              y: 228,
            },
            {
              x: 'horse',
              y: 231,
            },
            {
              x: 'skateboard',
              y: 112,
            },
            {
              x: 'others',
              y: 118,
            },
          ],
        },
        {
          id: 'germany',
          color: 'hsl(64, 70%, 50%)',
          data: [
            {
              x: 'plane',
              y: 198,
            },
            {
              x: 'helicopter',
              y: 286,
            },
            {
              x: 'boat',
              y: 215,
            },
            {
              x: 'train',
              y: 39,
            },
            {
              x: 'subway',
              y: 220,
            },
            {
              x: 'bus',
              y: 251,
            },
            {
              x: 'car',
              y: 267,
            },
            {
              x: 'moto',
              y: 277,
            },
            {
              x: 'bicycle',
              y: 33,
            },
            {
              x: 'horse',
              y: 3,
            },
            {
              x: 'skateboard',
              y: 75,
            },
            {
              x: 'others',
              y: 207,
            },
          ],
        },
        {
          id: 'norway',
          color: 'hsl(156, 70%, 50%)',
          data: [
            {
              x: 'plane',
              y: 123,
            },
            {
              x: 'helicopter',
              y: 141,
            },
            {
              x: 'boat',
              y: 145,
            },
            {
              x: 'train',
              y: 35,
            },
            {
              x: 'subway',
              y: 44,
            },
            {
              x: 'bus',
              y: 43,
            },
            {
              x: 'car',
              y: 250,
            },
            {
              x: 'moto',
              y: 122,
            },
            {
              x: 'bicycle',
              y: 175,
            },
            {
              x: 'horse',
              y: 34,
            },
            {
              x: 'skateboard',
              y: 230,
            },
            {
              x: 'others',
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
