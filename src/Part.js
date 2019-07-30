import React from 'react'
import PropTypes from 'prop-types'

const Part = ({ width, height, cornerRadius = 0, children, ...rest }) => {
  return (
    <svg width={`${width}px`} height={`${height}px`} viewBox={`0 0 ${width} ${height}`} {...rest}>
      <rect x="0" y="0" width={width} height={height} rx={cornerRadius} fill="none" stroke="#000" strokeWidth="1" />
      {children}
    </svg>
  )
}

Part.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  cornerRadius: PropTypes.number,
}

export default Part
