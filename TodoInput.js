import React, { useState } from 'react';

const TodoInput = ({ onAdd }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        style={{ padding: "10px", width: "70%" }}
      />
      <button type="submit" style={{ padding: "10px 15px" }}>Add</button>
    </form>
  );
};

export default TodoInput;
