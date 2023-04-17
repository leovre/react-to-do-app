import React from "react";
import ToDoListItem from "./ToDoListItem";
import "./ToDoList.css"
function ToDoList(props) {
    return(
      <div className="ToDoList">
  
     <ul>
      {props.todos.map((todo, idx) => (<ToDoListItem todo={todo}  key={idx + todo} index={idx}/>))}
     </ul>
     </div>
     )
     }

  export default ToDoList