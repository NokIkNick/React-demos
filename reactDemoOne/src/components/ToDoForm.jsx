import React from "react";

export const ToDoForm = ({todo, setTodo, setTodos, toDos}) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        todo.id = Math.floor(Math.random() * 10000);
        setTodos([...toDos, todo]);

    }

    const changeToDo = (event) => {
        setTodo({
            ...todo,
            [event.target.id] : event.target.value,
        });
    }

    return (
        <>
            <h3>Add a new ToDo:</h3>
            
            <form onSubmit={handleSubmit}>
            <label htmlFor="title" >Titel: </label>
            <input id="title" type="text" name="title" placeholder="todo" value={todo.title} onChange={changeToDo}></input>
            <br></br>
            <br></br>
            <label htmlFor="userId">UserID: </label>
            <input id="userId" type="number" name="userId" value={todo.userId} onChange={changeToDo}></input>
            <input type="submit" value="Submit"></input>
            </form>
            <hr></hr>
        </>
    );
}
