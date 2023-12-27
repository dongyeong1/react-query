import React from "react";

const Person = ({ person }) => {
  return (
    <div>
      <h3>{person.name}</h3>

      <p>{person.diameter}</p>
      <p>{person.gravity}</p>
    </div>
  );
};

export default Person;
