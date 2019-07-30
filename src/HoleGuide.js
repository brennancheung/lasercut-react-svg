import React from 'react'
import Hole from './Hole'
import Part from './Part'
import { flatten } from 'ramda'
import { spaceEvenly } from './lib/util'

const w = 700
const h = 300
const r = 7.2

const padding = 50
const left = padding
const right = w - padding
const top = padding
const bottom = h - padding

const holeSizeStart = 10
const firstRowStart = 2
const xPlacements = spaceEvenly(left, right, 10)
const yPlacements = spaceEvenly(top, bottom, 4)

const drawHole = (start, y) => (x, i) => (<Hole key={`${x}-${y}-${i}`} x={x} y={y} d={start + i} />)
const drawRow = (y, i) => xPlacements.map(drawHole(holeSizeStart + i*9, y))

const HoleGuide = () => {
  return (
    <Part id="part" width={w} height={h} cornerRadius={r}>
      {xPlacements.slice(firstRowStart).map(drawHole(firstRowStart, top))}
      {flatten(yPlacements.slice(1).map(drawRow))}
    </Part>
  )
}

export default HoleGuide
