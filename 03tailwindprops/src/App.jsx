import { useState } from 'react'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    userName: "Soumodip",
    age: 19
  }
  let newArr = [1,2,3]

  return (
    <>
      <h2 className='bg-green-400  text-black p-4 rounded-xl mb-4'>Tailwind Test</h2>
      {/* <Card channel = "Adda & Knowledge" someObj={newArr}/> */}
      <Card username = "Adda & Knowledge" btnText="Click Me"/>
      <Card username = "Soumodip"/>
    </>
  )
}

export default App
