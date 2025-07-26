import React from 'react';
import CohortDetail from './CohortDetail';

function App() {
  return (
    <div className="App">
      <CohortDetail
        name="React Bootcamp"
        startDate="2025-07-01"
        endDate="2025-08-15"
        status="ongoing"
      />
      <CohortDetail
        name="Java Cohort"
        startDate="2025-04-01"
        endDate="2025-05-31"
        status="completed"
      />
    </div>
  );
}

export default App;
