/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Guia3 from './Guia3'

describe('Display - Guia3', () => {
  it('renders without crashing ReactDOM', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Guia3 />, div)
  })

  it('renders preguntas Display correctly', () => {
    render(<Guia3 />)
  })

  it('Renders default number in the display', () => {
    render(<Guia3 />)
    const number = screen.getByText('0')
    expect(number).toBeInTheDocument()
  })
})
