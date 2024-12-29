import { useState } from 'react'
import './App.scss'
import passGenerate from './components/Pass'

const App = () => {
  const [result, setResult] = useState('sOmErAnDoMpAsSwOrD')
  const [inputVal, setInputVal] = useState(10)

  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10)

    if (value < 3 || value > 100) return null

    setInputVal(value)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result)
  }

  return (
    <>
      <h1 className='title'>Password Generator</h1>
      <div className="result_container">
        <div className="result" onClick={ copyToClipboard } >{result}</div>
      </div>
      <div className='container'>
        <input
          className="container__inputNum" type="text"
          value={inputVal} onChange={handleChange}
        />

        <input
          className="container__inputRange"
          type="range" min={3} max={100}
          value={inputVal} onChange={(event) => {
            handleChange(event);
            passGenerate(inputVal, 1, 1, result, setResult)
          }}
        />
      </div>
    </>

  )
}

export default App