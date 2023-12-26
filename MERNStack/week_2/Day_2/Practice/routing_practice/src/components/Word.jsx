import React from "react";
import { useParams } from "react-router-dom";

const Word = () => {
  const { word, color, bgColor } = useParams();
  const style = { color: color, background: bgColor };
  return (
    <div>
      <h1 style={style}> {word} </h1>
    </div>
  );
};

export default Word;
