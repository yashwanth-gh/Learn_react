import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <h1 className='bg-green-400 text-black p-4
  rounded-xl mb-2'>Tailwind test</h1>
  <Card cardName={"Yashwanth"} proffesion={"Junior Developer"}/>
  <Card cardName={"Clark"} proffesion={"Product manager"} place='London'/>
  <Card cardName={"Simon"} proffesion={"DB engineer"} place='Nigeria' />
    </>
  )
}

export default App
