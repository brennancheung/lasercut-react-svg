import React, { useRef, useState } from 'react'
import pretty from 'pretty'

const SVGManager = ({ children }) => {
  const [filename, setFilename] = useState('export.svg')
  const ref = useRef()
  const grabSVG = () => {
    const html = pretty(ref.current.innerHTML)
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(html)
    const linkElement = document.createElement('a')
    linkElement.setAttribute('href', dataUri)
    linkElement.setAttribute('download', filename)
    linkElement.click()
  }
  return (
    <div>
      <button onClick={grabSVG}>Export SVG</button>
      <input type="text" onChange={e => setFilename(e.target.value)} value={filename} />
      <br />
      <br />
      <div ref={ref}>
        {children}
      </div>
    </div>
  )
}

export default SVGManager
