import { useState } from 'react';
import ToDoList from './ToDoList';
import NewToDoForm from './NewToDoForm';
import './App.css';

 function App() {
  // const todos = ['Learn React', 'Learn MERN stack', 'Take a nap',];
  const [todos, setTodos] = useState([
    'Learn React', 
    'Learn MERN stack', 
    'Take a nap'
  ]);

  function handleAddTodo(newTodo){
    setTodos((todos) => [...todos, newTodo]);
    // const newArray = [...todos, "adding"]
    // setTodos(newArray)
  }

  const [showTodos, setShowTodos] = useState(true)
 
  return (
    <div className="App">
      <h1 onClick={handleAddTodo} id='heading'>React To Do</h1>
      <button onClick={() => setShowTodos(!showTodos)}>{showTodos ? 'HIDE' : 'SHOW'}</button>
      {showTodos && <ToDoList todos={todos}/>}
      <hr />
      <NewToDoForm handleAddTodo={handleAddTodo}/>
    </div>
    
  );
};

export default App;