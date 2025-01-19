import { useState } from 'react'
import './App.css'
import ComponentCards from './components/ComponentCards'
import ComponentReceipt from './components/ComponentReceipt'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ComponentCards></ComponentCards>
     <ComponentReceipt></ComponentReceipt>
    </>
  )
}

export default App
