import { useState } from 'react'
import './App.css'
import { TripViewer } from './components/TripViewer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TripViewer/>
    </>
  )
}

export default App
