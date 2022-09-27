/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Guia2 from './Guia2'

describe('Display - Guia2', () => {
  it('renders without crashing ReactDOM', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Guia2 />, div)
  })

  it('renders preguntas Display correctly', () => {
    render(<Guia2 />)
  })

  it('Renders default number in the display', () => {
    render(<Guia2 />)
    const number = screen.getByText('0')
    expect(number).toBeInTheDocument()
  })
})
