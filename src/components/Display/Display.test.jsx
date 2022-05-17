/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Display from './Display'

describe('Display', () => {
  it('renders without crashing ReactDOM', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Display />, div)
  })

  it('renders component Display correctly', () => {
    render(<Display />)
  })

  it('Renders default number in the display', () => {
    render(<Display />)
    const number = screen.getByText('0')
    expect(number).toBeInTheDocument()
  })
})
