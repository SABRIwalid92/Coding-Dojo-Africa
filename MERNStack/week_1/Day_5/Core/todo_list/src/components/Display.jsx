import React from "react";

const Display = ({ task, tasks, setTasks }) => {
  const checkBoxHandler = (e) => {
    setTasks(
      tasks.map((el, idx) => {
        if (idx === tasks.indexOf(task)) {
          return { ...el, completed: e.target.checked };
        } else return el;
      })
    );
    console.log(tasks);
  };

  const deleteFn = () => {
    setTasks(tasks.filter((e) => e !== task));
  };
  return (
    <div style={{ marginBottom: "30px" }}>
      <p
        style={{
          display: "inline",
          border: "3px solid black",
          padding: "5px",
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.body}
      </p>
      <input onChange={(e) => checkBoxHandler(e)} type="checkbox" />
      <button onClick={deleteFn}>Delete </button>
    </div>
  );
};

export default Display;
