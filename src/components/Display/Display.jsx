import React from 'react'
import './Display.scss'

function Display() {
  return (
    <div data-testid="Display" className="display" style={{ gridArea: 'd' }}>
      <div className="subtext" />
      <div className="textodisplay">
        0
      </div>
    </div>
  )
}

export default Display
