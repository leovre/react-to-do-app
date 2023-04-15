import ToDoList from './ToDoList';
import './App.css';

export default function App() {
  const todos = ['Learn React', 'Learn MERN stack', 'Take a nap',];
  return (
    <div className="App">
      <h1>React To Do</h1>
      <ToDoList todos={todos}/>
    </div>
    
  );
};

