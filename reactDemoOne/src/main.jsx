import React from 'react'
import ReactDOM from 'react-dom/client'
import App, {App1, App2} from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <App1 />
    <App2 />
  </React.StrictMode>,
)
