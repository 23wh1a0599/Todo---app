import React from 'react';

const TodoList = ({ todos, onDelete }) => {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            margin: "10px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 15px",
            border: "1px solid #eee",
            borderRadius: "8px",
            backgroundColor: "#fafafa",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
          }}
        >
          <span style={{ fontSize: "16px", fontWeight: "500" }}>{todo.task}</span>
          <button
            onClick={() => onDelete(todo.id)}
            style={{
              backgroundColor: "#dc3545",
              color: "#fff",
              border: "none",
              padding: "8px 12px",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s"
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#c82333")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#dc3545")}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
