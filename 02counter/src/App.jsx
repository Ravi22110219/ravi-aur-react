import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
   
  // let counter = 15

  const addValue = () => {
    console.log("value added", counter);
    counter = counter + 1
    setCounter(counter)
  }

  const removeValue = () => {
    console.log("value removed", counter);
    
    counter = counter - 1
    if (counter <0) {
      counter=0
    }
    setCounter(counter)
  }

  return (
    <>
      <h1>Ravi aur react</h1>
      <h2> Counter value: {counter}</h2>
      <button onClick={addValue}> Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value</button>

      <p>footer value: {counter}</p>
    </>
  )
}

export default App