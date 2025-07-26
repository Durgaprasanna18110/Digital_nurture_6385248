// CohortDetails.js
import React from 'react';
import styles from './CohortDetails.module.css';

const CohortDetail = ({ name, startDate, endDate, status }) => {
  const titleStyle = {
    color: status === 'ongoing' ? 'green' : 'blue'
  };

  return (
    <div className={styles.box}>
      <h3 style={titleStyle}>{name}</h3>
      <dl>
        <dt>Start Date:</dt>
        <dd>{startDate}</dd>

        <dt>End Date:</dt>
        <dd>{endDate}</dd>

        <dt>Status:</dt>
        <dd>{status}</dd>
      </dl>
    </div>
  );
};

export default CohortDetail;
