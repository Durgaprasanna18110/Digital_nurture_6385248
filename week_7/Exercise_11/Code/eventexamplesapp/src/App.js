// src/App.js
import React from 'react';
import Counter from './components/Counter';
import Welcome from './components/Welcome';
import SyntheticEvent from './components/SyntheticEvent';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>React Events Demo</h1>
      <Counter />
      <hr />
      <Welcome />
      <hr />
      <SyntheticEvent />
      <hr />
      <CurrencyConverter />
    </div>
  );
}

export default App;
