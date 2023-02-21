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
  return (
    <>
      <Navbar className="navbar" />
      <div className="body">
        <div className="main-container">
          <Title />
          <Form
            todos={todos}
            setTodos={setTodos}
          />
          <div className="todo-list">
            <TodoList
              className="todo-item"
              todos={todos}
              setTodos={setTodos}
            />
          </div>
        </div>
      </div>
    </>

  );
}

export default App;
