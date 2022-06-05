import React from 'react'
import './App.scss'
import Number from '../Number/Number'
import Display from '../Display/Display'
import Operation from '../Operation/Operation'

function App() {
  document.body.style.zoom = '1.6'

  return (
    <div className="calculator-area">
      <Display />
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10].map((number) => (
        <Number digit={number} />
      ))}
      {['+', '-', '*', '/', '%', '+/-', 'C', '='].map((operator) => (
        <Operation operation={operator} />
      ))}
    </div>
  )
}

export default App
