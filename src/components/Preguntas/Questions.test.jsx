/* eslint-disable no-undef */
import React from 'react'
import {
  screen, render, act,
} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Question from './Questions'
import Guia1 from '../Guias/Guia1'

describe('CalcFunc', () => {
  it('substracts positives', async () => {
    render(<Guia1 />)
    const [addNumber, operate] = Question()
    await act(async () => {
      addNumber(3)
      addNumber(4)
      operate('-')
      addNumber(1)
      addNumber(2)
      operate('=')
      expect(screen.getByTestId('Display')).toHaveTextContent(34 - 12)
    })
  })

  it('substracts negatives', async () => {
    render(<Guia1 />)
    const display = screen.getByTestId('Display')
    const [addNumber, operate] = Question()
    await act(async () => {
      addNumber(1)
      addNumber(2)
      operate('-')
      addNumber(3)
      addNumber(4)
      operate('=')
      expect(display).toHaveTextContent('-22')
    })
  })

  it('multiplication', async () => {
    render(<Guia1 />)
    const [addNumber, operate] = Question()
    await act(async () => {
      addNumber(3)
      operate('*')
      addNumber(2)
      operate('=')
      expect(screen.getByTestId('Display')).toHaveTextContent(6)
    })
  })

  it('multiplication by zero', async () => {
    render(<Guia1 />)
    const [addNumber, operate] = Question()
    await act(async () => {
      addNumber(3)
      operate('*')
      addNumber(0)
      operate('=')
      expect(screen.getByTestId('Display')).toHaveTextContent(0)
    })
  })
})
