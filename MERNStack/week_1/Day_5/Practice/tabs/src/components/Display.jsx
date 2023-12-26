import React from "react";

const Display = ({ contents }) => {
  const style = {
    margin: "auto",
    maxWidth: "600px",
    border: "1px solid black",
  };

  const id = contents[0];
  return (
    <div style={style}>
      <p>{contents[id]}</p>
    </div>
  );
};

export default Display;
