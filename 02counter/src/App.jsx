import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15) //default value 

  //let counter = 15

  const addValue = () => {
    if (counter<20)
      setCounter(counter+1)
    else 
      console.log("Counter cannot Go above 20")
  }

  const removeValue = () => {
    if (counter>0) 
      setCounter(counter-1)
    else
      console.log("Counter cannot Go below 0")
  }
  return (
    <>
      <h1>Soumodip is my Name</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
