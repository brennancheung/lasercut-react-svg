import React from 'react'
import './App.css'
// import HoleGuide from './HoleGuide'
import LogicSwitchCard from './LogicSwitchCard'
import SVGManager from './SVGManager'

function App () {
  return (
    <div className="App">
      <SVGManager>
        <LogicSwitchCard />
      </SVGManager>
    </div>
  )
}

export default App
