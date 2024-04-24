import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PersonViewer from './components/PersonViewer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello Vite + React</h1>
      <PersonViewer name="Dorthe Danielson" age = {13}/>
    </>
  )
}

const App1 = () => {return <div>App1</div>}
const App2 = () => {return <div>App2</div>}

export default App
export { App1, App2}
