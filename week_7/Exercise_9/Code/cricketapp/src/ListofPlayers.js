// src/ListofPlayers.js
import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat', score: 85 },
    { name: 'Rohit', score: 55 },
    { name: 'Dhoni', score: 95 },
    { name: 'Pant', score: 45 },
    { name: 'Shreyas', score: 72 },
    { name: 'Jadeja', score: 68 },
    { name: 'Bumrah', score: 80 },
    { name: 'Ashwin', score: 35 },
    { name: 'Hardik', score: 92 },
    { name: 'Shami', score: 77 },
    { name: 'Surya', score: 60 },
  ];

  // Filter players with score below 70
  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>

      <h3>Players with Score below 70</h3>
      <ul>
        {below70.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
