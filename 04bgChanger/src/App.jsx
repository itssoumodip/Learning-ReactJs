import { useState } from 'react'

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className="w-full h-screen duration-200"  
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor("Red")} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "Red"}}>Red</button>
          <button onClick={() => setColor("Green")}  
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "Green"}}>Green</button>
          <button onClick={() => setColor("Maroon")}  
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "Maroon"}}>Maroon</button>
          <button onClick={() => setColor("Olive")}  
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "Olive"}}>Olive</button>
          <button onClick={() => setColor("Black")}  
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "Black"}}>Black</button>
          <button onClick={() => setColor("Gray")}  
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "Gray"}}>Gray</button>
          <button onClick={() => setColor("Cornsilk")}  
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "Cornsilk"}}>Cornsilk</button>
          <button onClick={() => setColor("Yellow")}  
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:
          "Yellow"}}>Yellow</button>
          <button onClick={() => setColor("Thistle")}  
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "Thistle"}}>Thistle</button>
          <button onClick={() => setColor("Aquamarine")}  
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "Aquamarine"}}>Aquamarine</button>
          <button onClick={() => setColor("MistyRose")}  
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "MistyRose"}}>MistyRose</button>
          <button onClick={() => setColor("HoneyDew")}  
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "HoneyDew"}}>HoneyDew</button>
        </div>
      </div>
    </div>
  )
}

export default App
