import { useState } from 'react';
import ToDoList from './ToDoList';
import './App.css';

 function App() {
  // const todos = ['Learn React', 'Learn MERN stack', 'Take a nap',];
  const [todos, setTodos] = useState([
    'Learn React', 
    'Learn MERN stack', 
    'Take a nap'
  ]);

  function handleAddTodo(todo){
    const newArray = [...todos, "hello world"]
    setTodos(newArray)
  }

  const [showTodos, setShowTodos] = useState(true)
 
   

  console.log(todos)
  return (
    <div className="App">
      <h1 onClick={handleAddTodo} id='heading'>React To Do</h1>
      <button onClick={() => setShowTodos(!showTodos)}>{showTodos ? 'HIDE' : 'SHOW'}</button>
      {showTodos && <ToDoList todos={todos}/>}
    </div>
    
  );
};

export default App;