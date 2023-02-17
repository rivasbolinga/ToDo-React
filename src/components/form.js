import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
const Form  = ({input, setInput, todos, setTodos}) => {
  const [state, setState] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(e.target.value)
  }
  const onInputChange = (e) => {
    e.preventDefault();
    setTodos([...todos, {id: uuidv4(), title: input, completed:false}])
  }
  return (
    <form onSubmit={handleSubmit}>
    <div className="form-group">
    <label>Today I have to:</label>
    <input 
    type="text" 
    className="form-control" 
    placeholder="Write here your todo..." 
    value = {input}
    required
    onChange= {onInputChange}
    />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  )
}
export default Form;