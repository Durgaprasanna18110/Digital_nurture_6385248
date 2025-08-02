// src/components/CurrencyConverter.js
import React, { useState } from 'react';

function CurrencyConverter() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleConvert = (e) => {
    e.preventDefault();
    const rate = 0.011; 
    const result = rupees * rate;
    setEuro(result.toFixed(2));
  };

  return (
    <div>
      <h3>Currency Converter</h3>
      <form onSubmit={handleConvert}>
        <input
          type="number"
          placeholder="Enter amount in ₹"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
        />
        <button type="submit">Convert</button>
      </form>
      {euro && <p>Converted Amount in €: {euro}</p>}
    </div>
  );
}

export default CurrencyConverter;
