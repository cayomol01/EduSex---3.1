/* eslint-disable no-undef */
import React from 'react'
import {
  screen, render, act,
} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CalcFunc from './CalcFunc'
import Display from '../Display/Display'

describe('CalcFunc', () => {
  it('substracts positives', async () => {
    render(<Display />)
    const [addNumber, operate] = CalcFunc()
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
    render(<Display />)
    const display = screen.getByTestId('Display')
    const [addNumber, operate] = CalcFunc()
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
    render(<Display />)
    const [addNumber, operate] = CalcFunc()
    await act(async () => {
      addNumber(3)
      operate('*')
      addNumber(2)
      operate('=')
      expect(screen.getByTestId('Display')).toHaveTextContent(6)
    })
  })

  it('multiplication by zero', async () => {
    render(<Display />)
    const [addNumber, operate] = CalcFunc()
    await act(async () => {
      addNumber(3)
      operate('*')
      addNumber(0)
      operate('=')
      expect(screen.getByTestId('Display')).toHaveTextContent(0)
    })
  })

  it('multiplication by negative', async () => {
    render(<Display />)
    const [addNumber, operate] = CalcFunc()
    await act(async () => {
      addNumber(3)
      operate('*')
      addNumber(1)
      operate('+/-')
      operate('=')
      expect(screen.getByTestId('Display')).toHaveTextContent(-3)
    })
  })

  it('multiplication two negatives', async () => {
    render(<Display />)
    const [addNumber, operate] = CalcFunc()
    await act(async () => {
      addNumber(3)
      operate('+/-')
      operate('*')
      addNumber(1)
      operate('+/-')
      operate('=')
      expect(screen.getByTestId('Display')).toHaveTextContent(3)
    })
  })

  it('division whole', async () => {
    render(<Display />)
    const [addNumber, operate] = CalcFunc()
    await act(async () => {
      addNumber(10)
      operate('/')
      addNumber(2)
      operate('=')
      expect(screen.getByTestId('Display')).toHaveTextContent(5)
    })
  })

  it('division not whole', async () => {
    render(<Display />)
    const [addNumber, operate] = CalcFunc()
    await act(async () => {
      addNumber(1)
      addNumber(0)
      operate('/')
      addNumber(3)
      operate('=')
      expect(screen.getByTestId('Display')).toHaveTextContent(3.3333333)
    })
  })

  it('division by zero', async () => {
    render(<Display />)
    const [addNumber, operate] = CalcFunc()
    await act(async () => {
      addNumber(1)
      operate('/')
      addNumber(0)
      operate('=')
      expect(screen.getByTestId('Display')).toHaveTextContent('Error')
    })
  })

  it('mod bigger first', async () => {
    render(<Display />)
    const [addNumber, operate] = CalcFunc()
    await act(async () => {
      addNumber(6)
      operate('%')
      addNumber(3)
      operate('=')
      expect(screen.getByTestId('Display')).toHaveTextContent(0)
    })
  })

  it('mod bigger last', async () => {
    render(<Display />)
    const [addNumber, operate] = CalcFunc()
    await act(async () => {
      addNumber(3)
      operate('%')
      addNumber(6)
      operate('=')
      expect(screen.getByTestId('Display')).toHaveTextContent(3)
    })
  })

  it('clean with C', async () => {
    render(<Display />)
    const [addNumber, operate] = CalcFunc()
    await act(async () => {
      addNumber(987654321)
      operate('C')
      expect(screen.getByTestId('Display')).toHaveTextContent(0)
      addNumber(1)
      expect(screen.getByTestId('Display')).toHaveTextContent(1)
    })
  })

  it('Float shenanigans', async () => {
    render(<Display />)
    const [addNumber, operate] = CalcFunc()
    await act(async () => {
      operate('C')
      addNumber('.')
      expect(screen.getByTestId('Display')).toHaveTextContent('0.')
      addNumber(1)
      expect(screen.getByTestId('Display')).toHaveTextContent('0.1')
      addNumber('.')
      expect(screen.getByTestId('Display')).toHaveTextContent('0.1')
    })
  })

  it('Big numbers positive', async () => {
    render(<Display />)
    const [addNumber, operate] = CalcFunc()
    await act(async () => {
      operate('C')
      addNumber('999999999')
      expect(screen.getByTestId('Display')).toHaveTextContent(999999999)
      operate('+')
      addNumber('1')
      operate('=')
      expect(screen.getByTestId('Display')).toHaveTextContent('Error')
    })
  })

  it('Big numbers Negative', async () => {
    render(<Display />)
    const [addNumber, operate] = CalcFunc()
    await act(async () => {
      addNumber('-99999999')
      operate('-')
      addNumber('1')
      operate('=')
      expect(screen.getByTestId('Display')).toHaveTextContent('Error')
    })
  })

  it('Equal', async () => {
    render(<Display />)
    const [addNumber, operate] = CalcFunc()
    await act(async () => {
      operate('=')
      addNumber('123456789')
      operate('=')
      operate('=')
      operate('+')
      addNumber('1')
      operate('=')
      expect(screen.getByTestId('Display')).toHaveTextContent(123456789 + 1)
    })
  })

  it('Change sign where there is nothing', async () => {
    render(<Display />)
    const [addNumber, operate] = CalcFunc()
    await act(async () => {
      operate('+/-')
      expect(screen.getByTestId('Display')).toHaveTextContent(0)
      addNumber('0')
      operate('+/-')
      expect(screen.getByTestId('Display')).toHaveTextContent(0)
      addNumber('1')
      operate('+/-')
      expect(screen.getByTestId('Display')).toHaveTextContent(-1)
    })
  })

  it('has more than 9 digits on screen', async () => {
    render(<Display />)
    const addNumber = CalcFunc()[0]
    await act(async () => {
      for (let i = 0; i < 10; i += 1) {
        addNumber(i)
      }
      expect(screen.getByTestId('Display')).toHaveTextContent('012345678')
      addNumber(9)
      expect(screen.getByTestId('Display')).toHaveTextContent('012345678')
    })
  })

  it('for some reason gets another input', async () => {
    render(<Display />)
    const operate = CalcFunc()[1]
    await act(async () => {
      operate('A')
      expect(screen.getByTestId('Display')).toHaveTextContent('0')
    })
  })
})
