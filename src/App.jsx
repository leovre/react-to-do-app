import ToDoList from './ToDoList';
import './App.css';

function App() {
  const todos = ['Learn React', 'Learn MERN stack', 'Take a nap', <div> This is a div </div>]
  return (
    <div className="App">
      <h1>React To Do</h1>
      <ToDoList/>
      <li>my array {todos}</li> 
    </div>
    
  );
}

export default App;
