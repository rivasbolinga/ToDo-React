import React from 'react';
import PropTypes from 'prop-types';
import { Trash, PencilSquare } from 'react-bootstrap-icons';

const TodoList = ({ todos, setTodos }) => {
  const handleInputChange = (e, id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: e.target.value };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li className="todo-list" key={todo.id}>
          <input className="checkbox" type="checkbox" />
          <input
            type="text"
            value={todo.title}
            onChange={(e) => handleInputChange(e, todo.id)}
            readOnly
          />
          <button
            type="button"
            className="button-edit"
            onClick={() => handleDelete(todo.id)}
          >
            <PencilSquare />
          </button>
          <button type="button" className="button-delete">
            <Trash onClick={() => handleDelete(todo.id)} />
          </button>
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
