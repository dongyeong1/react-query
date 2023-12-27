import React from "react";

const Planet = ({ planet }) => {
  return (
    <div>
      <h3>{planet.name}</h3>
      <p> {planet.population}</p>
      <p>{planet.terrain}</p>
    </div>
  );
};

export default Planet;
