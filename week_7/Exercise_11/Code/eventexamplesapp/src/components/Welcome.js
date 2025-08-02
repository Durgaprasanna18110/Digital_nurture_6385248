// src/components/Welcome.js
import React from 'react';

function Welcome() {
  const sayWelcome = (msg) => {
    alert(`You said: ${msg}`);
  };

  return (
    <div>
      <button onClick={() => sayWelcome("Welcome")}>Say Welcome</button>
    </div>
  );
}

export default Welcome;
