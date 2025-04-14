import React from 'react';

const TodoList = ({ todos, onDelete }) => {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <li key={todo.id} style={{ margin: "10px 0", display: "flex", justifyContent: "space-between" }}>
          <span>{todo.task}</span>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
