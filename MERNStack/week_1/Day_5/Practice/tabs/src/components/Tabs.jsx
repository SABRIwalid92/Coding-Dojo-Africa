import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";

const Tab = ({ i, setContents, contents, color, bgColor }) => {
  //   const stylesFn = () => {
  //     setColor("white");
  //     setBgColor("black");
  //   };

  const style = {
    background: bgColor,
    color: color,
    display: "inline-block",
    fontSize: "20px",
    border: "1px solid black",
    width: "fit-content",
    minWidth: "150px",
    margin: "auto",
    fontFamily: "roboto ",
    fontWeight: "bold",
    padding: "10px",
  };

  const clickHandler = () => {
    setContents(
      contents.map((el, index) => {
        if (index === 0) {
          return i;
        } else return el;
      })
    );
  };
  return (
    <div
      style={style}
      key={i}
      onClick={() => {
        clickHandler();
      }}
    >
      Tab{i}
    </div>
  );
};

export default Tab;
