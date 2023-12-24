import "./App.css";
import Display from "./components/Display";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 0, body: "this a test task", completed: false },
  ]);

  return (
    <div className="App">
      <AddTask tasks={tasks} setTasks={setTasks} />
      {tasks.map((el, idx) => {
        return (
          <Display key={el.id} task={el} tasks={tasks} setTasks={setTasks} />
        );
      })}
    </div>
  );
}

export default App;
