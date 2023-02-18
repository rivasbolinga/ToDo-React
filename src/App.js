import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Title from './components/title';
import Form from './components/form';
import TodoList from './components/todos';

function App() {
  // keep track input from the euser
  const [todos, setTodos] = useState([]);
  // keep track from the list.
  const [editTodo, setEditTodo] = useState(null);
  return (
    <>
      <Navbar />
      <Title />
      <Form
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        setEditTodo={setEditTodo}
      />
    </>

  );
}

export default App;
