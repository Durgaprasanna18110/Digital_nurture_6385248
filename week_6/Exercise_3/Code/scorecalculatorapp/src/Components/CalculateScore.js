// File: src/Components/CalculateScore.js

import React from 'react';
import '../Stylesheets/mystyle.css';

const ptod = (decimal) => {
  return decimal.toFixed(2) + '%';
};

const calcScore = (total, goal) => {
  return ptod(total / goal * 100); // Assuming total and goal are marks and goal is out of 100
};

export const CalculateScore = ({ Name, School, total, goal }) => (
  <div className="formatstyle">
    <h1><font color="Brown">Student Details:</font></h1>

    <div className="Name">
      <b><span> Name: </span> </b>
      <span>{Name}</span>
    </div>

    <div className="School">
      <b><span> School: </span> </b>
      <span>{School}</span>
    </div>

    <div className="Total">
      <b><span>Total: </span></b>
      <span>{total}</span> Marks
    </div>

    <div className="Score">
      <b>Score:</b> {calcScore(total, goal)}
    </div>
  </div>
);
