// src/components/SyntheticEvent.js
import React from 'react';

function SyntheticEvent() {
  const handleClick = (e) => {
    alert("I was clicked");
    console.log(e); // Synthetic event object
  };

  return (
    <div>
      <button onClick={handleClick}>Synthetic Event Button</button>
    </div>
  );
}

export default SyntheticEvent;
