import { useState } from "react";
import "./App.css";
import AddBox from "./components/AddBox";
import Display from "./components/Display";

function App() {
  const [boxes, setBoxes] = useState([
    { side: 200, color: "red" },
    { side: 200, color: "blue" },
    { side: 200, color: "rebeccaPurple" },
  ]);
  const [side, setSide] = useState(0);
  const [color, setColor] = useState("");
  return (
    <div className="App">
      <AddBox
        boxes={boxes}
        setBoxes={setBoxes}
        side={side}
        setSide={setSide}
        color={color}
        setColor={setColor}
      />
      {boxes.map((el) => (
        <Display side={el.side} color={el.color} />
      ))}
    </div>
  );
}

export default App;
