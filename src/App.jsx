import { useState } from 'react'
import './App.scss'
import passGenerate from './components/Pass'

const App = () => {
  const [result, setResult] = useState('')
  const [inputVal, setInputVal] = useState(3)
  
  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10)
  
    if (value < 3 || value > 100) return null 
  
    setInputVal(value)
  }

  return (
    <div className='container'>
      <h1 className='container__title'>Password Generator</h1>
      <input 
      className="container__inputRange" 
      type="range" min={3} max={100} 
      value={inputVal} onChange={ (event) => { 
          handleChange(event); 
          passGenerate(inputVal, 1, 1, result, setResult)
        }}
      />
      
      <input 
      className="container__inputNum" type="number" 
      value={inputVal} onChange={ handleChange } 
      />
      <div className="container__result">{result}</div>
    </div>
  )
}

export default App