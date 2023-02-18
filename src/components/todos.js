import React from 'react';
import PropTypes from 'prop-types';
import { Trash, PencilSquare } from 'react-bootstrap-icons';

const TodoList = ({ todos, setTodos }) => {
  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  // -- Create new array with property completed as true.
  const handleComplete = (todo) => {
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    }));
  };
  // -- Set a new property for editing to change the input field readOnly to false.
  const handleEdit = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, editing: true };
      }
      return { ...todo, editing: false };
    });
    setTodos(newTodos);
  };
  const handleInputChange = (e, id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: e.target.value };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleBlur = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, editing: false };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter') {
      handleBlur(id);
    }
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li className="todo-list" key={todo.id}>
          <input
            className="checkbox"
            type="checkbox"
            onChange={() => handleComplete(todo)}
          />
          <input
            type="text"
            value={todo.title}
            onChange={(e) => handleInputChange(e, todo.id)}
            readOnly={!todo.editing}
            onBlur={() => handleBlur(todo.id)}
            onKeyDown={(e) => handleKeyDown(e, todo.id)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          />
          <button
            type="button"
            className="button-edit"
            onClick={() => handleEdit(todo.id)}
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
