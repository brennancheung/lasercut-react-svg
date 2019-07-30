import React from 'react'
import PropTypes from 'prop-types'

const Hole = ({ x, y, d }) => {
  const r = d / 2
  return (
    <circle cx={x} cy={y} r={r} fill="#000" />
  )
}

Hole.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  d: PropTypes.number.isRequired, // diameter
}
export default Hole
