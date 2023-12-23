import React from "react";

const Display = ({ side, color }) => {
  const style = {
    display: "inline-block",
    margin: "10px",
    background: color,
    height: "" + side + "px",
    width: "" + side + "px",
  };
  return <div style={style}></div>;
};

export default Display;
