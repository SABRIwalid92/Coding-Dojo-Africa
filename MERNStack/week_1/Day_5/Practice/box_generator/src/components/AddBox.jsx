import React from "react";

const AddBox = ({ boxes, setBoxes, side, setSide, color, setColor }) => {
  const boxColorHnadler = (e) => {
    setColor(e.target.value);
  };
  const boxSideHandler = (e) => {
    setSide(e.target.value);
  };
  const createBox = (e) => {
    e.preventDefault();
    setBoxes([...boxes, { side: side, color: color }]);
  };
  return (
    <div>
      <form onSubmit={(e) => createBox(e)}>
        <label>
          Box Color :
          <input type="text" onChange={(e) => boxColorHnadler(e)} />
        </label>
        <label>
          Box Side :
          <input type="number" onChange={(e) => boxSideHandler(e)} />
          <input type="submit" value="Create Box" />
        </label>
      </form>
    </div>
  );
};

export default AddBox;
