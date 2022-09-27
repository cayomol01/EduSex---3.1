/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Guia4 from './Guia4'

describe('Display - Guia4', () => {
  it('renders without crashing ReactDOM', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Guia4 />, div)
  })

  it('renders preguntas Display correctly', () => {
    render(<Guia4 />)
  })

  it('Renders default number in the display', () => {
    render(<Guia4 />)
    const number = screen.getByText('0')
    expect(number).toBeInTheDocument()
  })
})
