import { useState } from 'react';
import ToDoList from './ToDoList';
import './App.css';

 function App() {
  // const todos = ['Learn React', 'Learn MERN stack', 'Take a nap',];
  const todos = useState(['Learn React', 'Learn MERN stack', 'Take a nap'])
  console.log(todos)
  return (
    <div className="App">
      <h1 id='heading'>React To Do</h1>
      <ToDoList todos={todos[0]}/>
    </div>
    
  );
};

export default App;