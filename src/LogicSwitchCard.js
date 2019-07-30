import React from 'react'
import Hole from './Hole'
import { spaceEvenly } from './lib/util'
import { withGameCard } from './GameCard'
const { componentHoles } = require('./constants').default

const LogicSwitchCard = ({ left, right, holes }) => {
  const xPlacements = spaceEvenly(left, right, 5)
  const ledHole = { x: xPlacements[2], y: holes[3] }
  const holeSwitch1 = { x: xPlacements[1], y: holes[5] }
  const holeSwitch2 = { x: xPlacements[3], y: holes[5] }
  return (
    <React.Fragment>
      {false && xPlacements.map(x => <Hole key={x} x={x} />)}
      <Hole {...ledHole} d={componentHoles.led} />
      <Hole {...holeSwitch1} d={componentHoles.pushButton} />
      <Hole {...holeSwitch2} d={componentHoles.pushButton} />
    </React.Fragment>
  )
}

export default withGameCard(LogicSwitchCard)
