import React from 'react'
import './App.scss'
import Rating from '../Rating/Rating'
import Guia1 from '../Guias/Guia1'
import Operation from '../Operation/Expertos'

function App() {
  document.body.style.zoom = '1.6'

  return (
    <div className="calculator-area">
      <Guia1 />
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10].map((number) => (
        <Rating digit={number} />
      ))}
      {['+', '-', '*', '/', '%', '+/-', 'C', '='].map((operator) => (
        <Operation operation={operator} />
      ))}
    </div>
  )
}

export default App
