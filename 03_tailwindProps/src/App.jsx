import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
  let myObj = {
    username :"syed ali",
    age:18
  }
  let myArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 rounded-xl p-4'>Tailwind Css</h1>
      <Cards username="affan" someObj = {myObj} someArr = {myArr} para="“Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, repellat!”"/>
      <Cards username="ali" para="“Lorem, ipsum dolor sit amet”"/>
    </>
  )
}

export default App
