import React from "react";
import ToDoListItem from "./ToDoListItem";

function ToDoList(props) {
  const str = "SEI";
  const score = 94;
    return(
        <>
        <div className="ToDoList">
      <h2>To Do List</h2>
     <ul>
      <ToDoListItem/>
      <ToDoListItem/>
      <li>number: {score}</li>
      <li>String: {str}</li>
      <li>Math.random(): {Math.random()*100} {str}</li>
     </ul>
     </div>
     </>
     )
     }

     export default ToDoList;