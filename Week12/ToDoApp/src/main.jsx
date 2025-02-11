import { StrictMode } from 'react'
import { ToDoContextProvider } from './contexts/ToDoContext';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'



createRoot(document.getElementById('root')).render(

    <ToDoContextProvider><App /></ToDoContextProvider>
    
  
)
