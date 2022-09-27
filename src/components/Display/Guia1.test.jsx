/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Guia1 from './Guia1'

describe('Display - Guia1', () => {
  it('renders without crashing ReactDOM', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Guia1 />, div)
  })

  it('renders preguntas Display correctly', () => {
    render(<Guia1 />)
  })

  it('Renders default number in the display', () => {
    render(<Guia1 />)
    const number = screen.getByText('0')
    expect(number).toBeInTheDocument()
  })
})
