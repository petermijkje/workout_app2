import React from "react";
import MyResponsiveLine from "../statistics/statistics.component";
import MyResponsiveCalendar from "../statistics/waffle-graph/waffle-graph.component";

import "./profile-stats.styles.scss";

let data = [
  {
    id: "japan",
    color: "hsl(185, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 227,
      },
      {
        x: "helicopter",
        y: 140,
      },
      {
        x: "boat",
        y: 164,
      },
      {
        x: "train",
        y: 48,
      },
      {
        x: "subway",
        y: 224,
      },
      {
        x: "bus",
        y: 58,
      },
      {
        x: "car",
        y: 57,
      },
      {
        x: "moto",
        y: 163,
      },
      {
        x: "bicycle",
        y: 74,
      },
      {
        x: "horse",
        y: 262,
      },
      {
        x: "skateboard",
        y: 194,
      },
      {
        x: "others",
        y: 56,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(205, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 300,
      },
      {
        x: "helicopter",
        y: 298,
      },
      {
        x: "boat",
        y: 232,
      },
      {
        x: "train",
        y: 98,
      },
      {
        x: "subway",
        y: 145,
      },
      {
        x: "bus",
        y: 126,
      },
      {
        x: "car",
        y: 269,
      },
      {
        x: "moto",
        y: 161,
      },
      {
        x: "bicycle",
        y: 33,
      },
      {
        x: "horse",
        y: 178,
      },
      {
        x: "skateboard",
        y: 176,
      },
      {
        x: "others",
        y: 133,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(238, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 114,
      },
      {
        x: "helicopter",
        y: 36,
      },
      {
        x: "boat",
        y: 252,
      },
      {
        x: "train",
        y: 170,
      },
      {
        x: "subway",
        y: 62,
      },
      {
        x: "bus",
        y: 10,
      },
      {
        x: "car",
        y: 243,
      },
      {
        x: "moto",
        y: 175,
      },
      {
        x: "bicycle",
        y: 40,
      },
      {
        x: "horse",
        y: 26,
      },
      {
        x: "skateboard",
        y: 227,
      },
      {
        x: "others",
        y: 54,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(174, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 16,
      },
      {
        x: "helicopter",
        y: 257,
      },
      {
        x: "boat",
        y: 59,
      },
      {
        x: "train",
        y: 28,
      },
      {
        x: "subway",
        y: 175,
      },
      {
        x: "bus",
        y: 69,
      },
      {
        x: "car",
        y: 149,
      },
      {
        x: "moto",
        y: 180,
      },
      {
        x: "bicycle",
        y: 52,
      },
      {
        x: "horse",
        y: 153,
      },
      {
        x: "skateboard",
        y: 220,
      },
      {
        x: "others",
        y: 49,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(197, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 50,
      },
      {
        x: "helicopter",
        y: 3,
      },
      {
        x: "boat",
        y: 35,
      },
      {
        x: "train",
        y: 8,
      },
      {
        x: "subway",
        y: 180,
      },
      {
        x: "bus",
        y: 112,
      },
      {
        x: "car",
        y: 99,
      },
      {
        x: "moto",
        y: 59,
      },
      {
        x: "bicycle",
        y: 158,
      },
      {
        x: "horse",
        y: 2,
      },
      {
        x: "skateboard",
        y: 92,
      },
      {
        x: "others",
        y: 281,
      },
    ],
  },
];

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
    {/* <h1>Profile Stats</h1> */}
    <span>{name}</span>
    <span>{age}</span>
    <span>{height}</span>
    <span>{sex}</span>
    <span>{weight}</span>
    <span>{currentGoal}</span>
    <span>{onTrack}</span>
    <ul>
      <li>Best Squat</li>
      <li>Best Deadlift</li>
      <li>Best Overhead Press</li>
      <li>Best Bench Press</li>
      <li>Best Run</li>
      <li>Best Pull up</li>
    </ul>
    <MyResponsiveLine data={data} />
    {/* <MyResponsiveWaffle data2={data} /> */}
  </div>
);

export default ProfileStats;
