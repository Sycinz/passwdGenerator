import { useState } from 'react'
import './App.scss'
import passGenerate from './components/Pass'

const App = () => {
  const [result, setResult] = useState('')
  const [inputVal, setInputVal] = useState('')
  
  const handleChange = (event) => {
    const { value } = event.target
  
    if (value < 0 && value > 100) return null 
  
    setInputVal(prevVal => value)
  }

  return (
    <div className='container'>
      <h1 className='container__title'>Password Generator</h1>
      <input className="container__inputRange" type="range" min={0} max={100} value={inputVal} onChange={handleChange}/><input className="container__inputNum" type="number" value={inputVal} />
    </div>
  )
}

export default App