/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Guia5 from './Guia5'

describe('Display - Guia5', () => {
  it('renders without crashing ReactDOM', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Guia5 />, div)
  })

  it('renders preguntas Display correctly', () => {
    render(<Guia5 />)
  })

  it('Renders default number in the display', () => {
    render(<Guia5 />)
    const number = screen.getByText('0')
    expect(number).toBeInTheDocument()
  })
})
