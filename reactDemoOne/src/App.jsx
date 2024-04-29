import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PersonViewer from './components/PersonViewer'
import './App.css'
import ToDoList from './components/ToDoList'
import {ToDoForm} from './components/ToDoForm'

function App() {
  const [todo, setTodo] = useState({title: '', userId: 1, completed: false});
  const[toDos, setToDos] = useState([]);

  //The way lifting state up works is that the state is lifted up to the closest common ancestor of the components that need to share the state.

  return (
    <>
      <h1>Hello Vite + React</h1>
      <ToDoForm todo={todo} setTodo={setTodo} setTodos={setToDos} toDos={toDos}/> 
      <ToDoList toDos={toDos} setToDos={setToDos}/>
      <hr></hr>
      <PersonViewer name="Dorthe Danielson" age = {13}/>
    </>
  )
}

const App1 = () => {return <div>App1</div>}
const App2 = () => {return <div>App2</div>}

export default App
export { App1, App2}
