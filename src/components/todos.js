import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ todos, setTodos }) => {
  // Update the title of the todo object in todo state.
  const handleInputChange = (e, id) => {
    const newTodos = todos.map((todo) => {
      // Using map to create a new array of todos.
      if (todo.id === id) {
        return { ...todo, title: e.target.value };
        // is id matches we return a new todo object with same
        // id and a new title based on the todo object.
      }
      return todo;
    });
    setTodos(newTodos);
  };
  return (
    <ul>
      {todos.map((todo) => (
        <li className="todo-list" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            onChange={(e) => handleInputChange(e, todo.id)}
          />
        </li>
      ))}
    </ul>

  );
};
TodoList.propTypes = {
  todos: PropTypes.arrayOf.isRequired,
  setTodos: PropTypes.func.isRequired,
};
export default TodoList;
