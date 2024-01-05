import React from "react";

const DisplayPlanets = ({ obj }) => {
  return (
    <div>
      <h1>DisplayPlanets</h1>
      <p>{JSON.stringify(obj)}</p>
    </div>
  );
};

export default DisplayPlanets;
