import React from 'react'
import Hole from './Hole'
import Part from './Part'
import { spaceEvenly } from './lib/util'

import constants from './constants'
const { cardCornerRadius, cardWidth, cardHeight, springHoleSize } = constants

export const CardContext = React.createContext({})

const w = cardWidth
const h = cardHeight
const r = cardCornerRadius

const padding = 20
const left = padding
const right = w - padding
const top = padding
const bottom = h - padding

const yPlacements = spaceEvenly(top, bottom, 7)

const drawHole = x => (y, i) => (<Hole key={`${x}-${y}-${i}`} x={x} y={y} d={springHoleSize} />)
const drawColumn = x => yPlacements.map(drawHole(x))

const GameCard = ({ children }) => {
  const value = { w, h, r, padding, left, right, top, bottom, holes: [null, ...yPlacements] }
  return (
    <CardContext.Provider value={value}>
      <Part id="part" width={w} height={h} cornerRadius={r}>
        {drawColumn(left)}
        {drawColumn(right)}
        {children}
      </Part>
    </CardContext.Provider>
  )
}

// Simple context won't work because other Components want to include GameCard.
// GameCard must be the enclosing component so we are forced to create it like this.
export const withGameCard = Component => props => {
  return (
    <GameCard>
      <CardContext.Consumer>
        {context => (
          <Component {...context} {...props} />
        )}
      </CardContext.Consumer>
    </GameCard>
  )
}

export default GameCard
