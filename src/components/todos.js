import React from 'react';
import PropTypes from 'prop-types';
import { Trash, PencilSquare } from 'react-bootstrap-icons';

const TodoList = ({ todos, setTodos, setEditTodo }) => {
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

  const handleComplete = (todo) => {
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    }));
  };
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
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
  setEditTodo: PropTypes.func.isRequired,
};
export default TodoList;
