/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import {
  screen, render, act, fireEvent,
} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Rating from './Rating'
import Guia1  from '../Guias/Guia1'

describe('Number', () => {
  it('renders without crashing ReactDOM', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Rating />, div)
  })

  it('renders component Number correctly', () => {
    render(<Rating digit={1} />)
  })

  it('renders numbers correctly', () => {
    const { getByText } = render(<Rating digit={1} />)
    expect(getByText('1')).toHaveTextContent('1')
  })

  it('renders period correctly', () => {
    const { getByText } = render(<Rating digit="." />)
    expect(getByText('.')).toHaveTextContent('.')
  })

  it('works when clicking on the number', async () => {
    render(<Guia1 />)
    const { getByText } = render(<Rating digit={1} />)
    const button = getByText('1')
    const display = screen.getByTestId('Display')

    await act(async () => {
      fireEvent.click(button)
      expect(display).toHaveTextContent('1')
    })
  })

  it('decimal numbers work 1.1', async () => {
    render(<Guia1 />)
    render(<Rating digit="." />)
    render(<Rating digit={1} />)
    const period = screen.getByText('.')
    const one = screen.getByText('1')
    const display = screen.getByTestId('Display')

    await act(async () => {
      await fireEvent.click(one)
      await fireEvent.click(period)
      await fireEvent.click(one)
      expect(display).toHaveTextContent('1.1')
    })
  })
})
