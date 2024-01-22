import { useState } from 'react'

import './App.css'
import ClockHeading from './components/CockHeading'
import ClockSlogen from './components/clockSlogen'
import CurrentTime from './components/currentTime'

function App() {
  const [count, setCount] = useState(0)

  return (
    <center>
    <ClockHeading/>
    <ClockSlogen/>
    <CurrentTime/>
    </center>
  )
}

export default App
