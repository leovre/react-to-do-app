import ToDoList from './ToDoList';
import './App.css';

 function App() {
  const todos = ['Learn React', 'Learn MERN stack', 'Take a nap',];
  return (
    <div className="App">
      <h1 id='heading'>React To Do</h1>
      <ToDoList todos={todos}/>
    </div>
    
  );
};

export default App;