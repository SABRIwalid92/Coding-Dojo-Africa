import React from "react";
import { useParams } from "react-router-dom";

const Word = () => {
  const { word, color, bgColor } = useParams();
  const style = { color, background: bgColor };
  return (
    <div>
      {parseInt(word) ? <p>The Number is</p> : <p>The Word is</p>}
      <h1 style={style}> {word} </h1>
    </div>
  );
};

export default Word;
