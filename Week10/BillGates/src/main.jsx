import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BillGatesProvider } from './context/BillGatesContext.jsx'

createRoot(document.getElementById('root')).render(
    <BillGatesProvider><App /></BillGatesProvider>
    
 
)
