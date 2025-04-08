import React from 'react';
import '../styles.css';

const Actions = () => {
  return (
    <div className="container-action">
      <div style={{ paddingTop: '36%' }}>
        <button className="action-btn">A</button>
      </div>
      <div>
        <button className="action-btn">B</button>
      </div>
    </div>
  );
};

export default Actions;