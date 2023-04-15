import React from "react";
import ToDoListItem from "./ToDoListItem";

export default function ToDoList({todos}) {
    const toDoListItems = todos.map(t => <ToDoListItem />);
    return(
        <>
        <div className="ToDoList">
      <h2>To Do List</h2>
     <ul>
      {toDoListItems}
     </ul>
     </div>
     </>
     )
     }

  