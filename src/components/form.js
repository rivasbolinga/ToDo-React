import { useState } from 'react';

const Form  = () => {
  const [state, setState] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state)
  }
  return (
    <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label>Today I have to:</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Write here your todo..." />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  )
}
export default Form;