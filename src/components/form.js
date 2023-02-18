import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Form = ({ todos, setTodos }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Write here your todo..."
          value={input}
          required
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="btn btn-outline-dark">
          Add
        </button>
      </div>
    </form>
  );
};

Form.propTypes = {
  todos: PropTypes.arrayOf.isRequired,
  setTodos: PropTypes.func.isRequired,
};
export default Form;
