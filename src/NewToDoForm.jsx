import React, { useState } from "react";

function NewToDoForm(props) {
    const [newTodo, setNewTodo] = useState("")

    function handleInputChange(e) {
        setNewTodo(e.target.value)
    }

    function handleAddTodo(e){
        props.handleAddTodo(newTodo)
        setNewTodo("")
    }

    return(
        <>
        <h2>New To-Do</h2>
        <input type="text" placeholder="New To-Do" value={newTodo} onChange={handleInputChange}/>
        <button onClick={handleAddTodo}>ADD TO-DO</button>
        </>
    )   
}

export default NewToDoForm;