import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(10)

  const increment = () => {
    if (counter <= 9 && counter >= 0) {
    setCounter(counter + 1)
    }
  }

  const decrement = () => {
    if (counter >= 1 && counter <= 10) {
      setCounter(counter - 1)
      }
  }  

  return (
    <>
      <div className="flex justify-center">
        <div className="h-96 w-80 mt-24 border-2 rounded-lg bg-lime-400">
          <h1 className="text-6xl font-serif mt-10">Counter</h1>
          <p className="text-8xl mt-5">{counter}</p>
          <button onClick={increment} className="border-2 rounded-lg bg-sky-500/100 p-1 mt-10">Increment</button><br/>
          <button onClick={decrement} className="border-2 rounded-lg bg-sky-500/100 p-1 mt-3">Decrement</button>
          <p className='font-serif mt-3 font-semibold'>Counter value lies between 0 to 10</p>
        </div>
      </div>
    </>
  );
}

export default App
