import React from "react";
import './ToDoListItem.css'
function ToDoListItem({todo, showAnything, index}) {
    return (
    <div className="ToDoListItem">
     <li style={{backgroundColor: index % 2 ? "lavender" : "plum",}}><span className="index">{index +1}</span> {todo}</li>
     {showAnything && <li>Anything</li>}
    </div>
    )
}

export default ToDoListItem
