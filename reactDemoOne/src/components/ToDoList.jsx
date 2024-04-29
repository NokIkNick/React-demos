import React, { useEffect} from 'react'

export default function ToDoList({toDos, setToDos}) {
   

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json()).then(data => setToDos(data.slice(0, 50)));
    }, [])


  return (
    <>
    <h3>ToDoList:</h3>
    {toDos.map((todo, index) => {
        return (
            <div key = {todo.id}>
                <div>{index}: {todo.title}</div>
                <div>Completion status: {todo.completed.toString()}</div>
                <div>UserID: {todo.userId}</div>
                <hr></hr>
            </div>
        );
    })}
    </>
  )
}


