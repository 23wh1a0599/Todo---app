import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    if (task.trim()) {
      setTodos([...todos, { id: Date.now(), task: task.trim() }]);
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "50px auto",
        textAlign: "center",
        padding: "30px",
        borderRadius: "10px",
        backgroundColor: "#f8f9fa",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        fontFamily: "Segoe UI, sans-serif"
      }}
    >
      <h2 style={{ marginBottom: "20px", fontWeight: "600", color: "#333" }}>📝 To-Do App</h2>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
