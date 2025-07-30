// src/IndianPlayers.js
import React from 'react';

const IndianPlayers = () => {
  const OddTeam = ['Virat', 'Dhoni', 'Shami'];
  const EvenTeam = ['Rohit', 'Bumrah', 'Pant'];

  // Destructuring arrays
  const [odd1, odd2, odd3] = OddTeam;
  const [even1, even2, even3] = EvenTeam;

  const T20Players = ['Gill', 'Iyer'];
  const RanjiPlayers = ['Jaiswal', 'Prithvi'];

  // Merging arrays using ES6 spread syntax
  const merged = [...T20Players, ...RanjiPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        <li>{odd1}</li>
        <li>{odd2}</li>
        <li>{odd3}</li>
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        <li>{even1}</li>
        <li>{even2}</li>
        <li>{even3}</li>
      </ul>

      <h2>All Indian Players (Merged)</h2>
      <ul>
        {merged.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
