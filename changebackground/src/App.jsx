import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <div className='w-full h-screen duration-200'
      style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap 
        justify-center gap-3 shadow-lg
         bg-white px-3 py-2 rounded-3xl ml-4">
          <button onClick={() => setColor("black")} className="outline-none px-4 py-1 shadow-lg text-white rounded-full" style={{ background: "Black" }} name='Red'>Black</button>
        </div>
        <div className="flex flex-wrap 
        justify-center gap-3 shadow-lg
         bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor('white')} className="outline-none px-4 py-1 shadow-lg text-white rounded-full" style={{ background: "white" }} >white</button>
        </div>
        <div className="flex flex-wrap 
        justify-center gap-3 shadow-lg
         bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 shadow-lg text-white rounded-full" style={{ background: "red" }} name='Red'>Red</button>
        </div>
        <div className="flex flex-wrap 
        justify-center gap-3 shadow-lg
         bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("green")} className="outline-none px-4 py-1 shadow-lg text-white rounded-full" style={{ background: "green" }} >Green</button>
        </div>
        <div className="flex flex-wrap 
        justify-center gap-3 shadow-lg
         bg-white px-3 py-2 rounded-3xl gap-3">
          <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 shadow-lg text-white rounded-full" style={{ background: "blue" }} >blue</button>
        </div>
      </div>
    </div>
  )
}
export default App
