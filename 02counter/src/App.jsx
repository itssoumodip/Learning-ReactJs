import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15) //default value 

  //let counter = 15

  const addValue = () => {
    // counter = counter + 1;
    setCounter(counter+1)
    // console.log(counter)
  }

  const removeValue = () => {
    setCounter(counter-1)
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
