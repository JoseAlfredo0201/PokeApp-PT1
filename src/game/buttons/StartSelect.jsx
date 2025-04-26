import React from 'react';

const StartSelect = ({ handleSelectPokemon }) => {
  return (
    <div style={{ paddingTop: '35%' }}>
      <div className="container-start-select">
        <div className="container-btn-start">
          <button
            className="start-select-btn"
            onClick={() => handleSelectPokemon()}
          >SELECT</button>
        </div>
        <div className="container-btn-start">
          <button className="start-select-btn">START</button>
        </div>
      </div>
    </div>
  );
};

export default StartSelect;
