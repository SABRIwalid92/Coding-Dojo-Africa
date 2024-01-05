import React from "react";

const DisplayPeople = ({ obj }) => {
  return (
    <div>
      <h1>DisplayPeople</h1>
      <p>{JSON.stringify(obj)}</p>
      {/* <p>
        {" "}
        <strong>Name:</strong>{" "}
      </p>
      <p>
        {" "}
        <strong>Name:</strong>{" "}
      </p>
      <p>
        {" "}
        <strong>Name:</strong>{" "}
      </p>
      <p>
        {" "}
        <strong>Name:</strong>{" "}
      </p> */}
    </div>
  );
};

export default DisplayPeople;
