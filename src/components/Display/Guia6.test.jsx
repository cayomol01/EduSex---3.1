/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Guia6 from './Guia6'

describe('Display - Guia6', () => {
  it('renders without crashing ReactDOM', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Guia6 />, div)
  })

  it('renders preguntas Display correctly', () => {
    render(<Guia6 />)
  })

  it('Renders default number in the display', () => {
    render(<Guia6 />)
    const number = screen.getByText('0')
    expect(number).toBeInTheDocument()
  })
})
