// src/TrainerDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import trainers from './TrainersMock';

const TrainerDetails = () => {
  const { id } = useParams();
  const trainer = trainers.find(t => t.trainerId === parseInt(id));

  if (!trainer) {
    return <h3>Trainer not found</h3>;
  }

  return (
    <div>
      <h2>{trainer.name}'s Details</h2>
      <p><b>Email:</b> {trainer.email}</p>
      <p><b>Phone:</b> {trainer.phone}</p>
      <p><b>Technology:</b> {trainer.technology}</p>
      <p><b>Skills:</b> {trainer.skills.join(', ')}</p>
    </div>
  );
};

export default TrainerDetails;
