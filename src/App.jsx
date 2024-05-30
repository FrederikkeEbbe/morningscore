import { useState } from 'react'
import './App.css'
import './components/Navbar'
import Navbar from './components/Navbar'
import LandingPage from './LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <LandingPage />
    </>
  )
}

export default App
