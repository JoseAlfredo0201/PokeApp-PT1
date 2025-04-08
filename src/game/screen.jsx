const Screen = ({ pokemones }) => {
  console.log(pokemones);

  return (
    <div className="container-screen">
      <div className="screen-text">

        <div className="screen">
         {pokemones?.map((pokemon) => (
          <div>
          <img src={pokemon.sprites.front_default} alt="pokemones"/>
          <p className="pokemon-name">{pokemon.name}</p>
          </div>
         ))}
        </div>
        <div className="container-text">
          <p className="text">
            Nintendo <span>GAME BOY</span>
            <span style={{ fontSize: '8px' }}> TM</span>
          </p>
          </div>
      </div>
    </div>
  );
};

export default Screen;
// import React from "react";