import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)

  const increaseValue = () => {
    counter = counter + 1;
      setCounter(counter);
  }

  const decreaseValue = () => {
    counter = counter - 1;
      setCounter(counter);
  }

  return (
    <>
      <h1>Hellow world</h1>
      <p>Counter Value: {counter}</p>
      <button onClick={increaseValue}>Increase Value {counter}</button>
      <button onClick={decreaseValue}>Decrease Value {counter}</button>
      <p>Counter Value: {counter}</p>
    </>
  )
}

export default App
