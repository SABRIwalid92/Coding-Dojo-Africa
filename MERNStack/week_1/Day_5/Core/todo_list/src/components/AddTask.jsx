import React from "react";

const AddTask = ({ tasks, setTasks }) => {
  const submitHnadler = (e) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      {
        id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 0,
        body: e.target[0].value,
        completed: false,
      },
    ]);
  };
  return (
    <div>
      <form onSubmit={submitHnadler}>
        <textarea></textarea>

        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddTask;
