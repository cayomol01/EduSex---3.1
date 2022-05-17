/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import {
  screen, render, act, fireEvent,
} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App'
import Display from '../Display/Display'
import Operation from '../Operation/Operation'
import Number from '../Number/Number'

describe('App', () => {
  it('renders without crashing ReactDOM', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })

  it('makes addition operation', async () => {
    render(<Display />)
    const { getByText } = render(<Number digit={1} />)
    const buttonone = getByText('1')
    render(<Operation operation="+" />)
    const button = screen.getByText('+')
    const display = screen.getByTestId('Display')

    await act(async () => {
      await fireEvent.click(buttonone)
      expect(display).toHaveTextContent('1')
      await fireEvent.click(button)
      expect(display).toHaveTextContent('1')
      await fireEvent.click(buttonone)
      await fireEvent.click(buttonone)
      expect(display).toHaveTextContent('11')
      await fireEvent.click(button)
      expect(display).toHaveTextContent('12')
    })
  })

  it('renders component App correctly', () => {
    render(<App />)
  })

  it('Has every button element', () => {
    render(<App />)
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBe(19)
  })

  it('Has all numbers rendered', () => {
    render(<App />)
    const numbers = screen.getAllByTestId('NButton')
    expect(numbers.length).toBe(11)
  })

  it('Has all operations rendered', () => {
    render(<App />)
    const numbers = screen.getAllByTestId('OButton')
    expect(numbers.length).toBe(8)
  })
})
