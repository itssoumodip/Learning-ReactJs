import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15) //default value 

  //let counter = 15

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter)
    console.log(counter)
  }

  return (
    <>
      <h1>Soumodip is my Name</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button>Remove Value</button>
    </>
  )
}

export default App
