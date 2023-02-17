import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Title from './components/title.js'
import Form from './components/form.js'
import TodoItem from './components/todos.js'
function App() {
  return (
    <>
    <Navbar />
    <Title />
    <Form 
    input = {input}
    setInput = {setInput}
    todos = {todos}
    setTodos = {setTodos}
    />
    <TodoList todos={todos} setTodos={setTodos}/>
    </>
  
  );
}

export default App;
