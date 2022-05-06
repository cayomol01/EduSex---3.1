import './Calc.scss'

let stack = ['0']
let input = []
let operation = ''
let newstack = ''

const useCalc = () => {
  const getDisplay = () => {
    let text
    if (input.length > 0) {
      text = input.join('')
    } else {
      [text] = stack
    }
    document.body.getElementsByClassName('textodisplay')[0].innerHTML = text
    if (stack[0] !== '0') {
      document.body.getElementsByClassName('subtext')[0].innerHTML = `${stack} ${operation}`
    } else {
      document.body.getElementsByClassName('subtext')[0].innerHTML = ''
    }
  }

  const addNumber = (number) => {
    if (input.length <= 8) {
      if (number === '.') {
        if (input.length === 0) {
          input.push('0')
        }
        if (input.indexOf('.') === -1) {
          input.push(number)
        }
      } else {
        input.push(number)
      }
    }
    getDisplay()
  }

  const Findresult = (pinput) => {
    let result
    let input2 = 0
    if (pinput[1]) {
      input2 = parseFloat(pinput[1])
    }

    const input1 = parseFloat(pinput[0])

    if (operation === '+') {
      result = input1 + input2
    } else if (operation === '-') {
      result = input1 - input2
    } else if (operation === '*') {
      result = input1 * input2
    } else if (operation === '/') {
      if (input2 === 0) {
        // eslint-disable-next-line no-alert
        alert('No se puede dividir entre 0')
        result = 0
      } else {
        result = input1 / input2
      }
    } else if (operation === '%') {
      result = input1 % input2
    } else if (pinput[1]) {
      result = input2
    } else {
      result = input1
    }
    operation = ''
    result = result.toString().substring(0, 9)
    return result
  }

  const operate = (operator) => {
    if (operator === 'C') {
      input = []
      stack = ['0']
    } else if (operator === '+/-') {
      if (input.length > 0) {
        stack = [input.join('')]
      }
      input = []
      stack = [(stack[0] * -1).toString().substring(0, 9)]
    } else if (stack.length === 0) {
      stack = [input.join('')]
      input = []
      operation = operator
    } else if (operator === '+' || operator === '-' || operator === '*' || operator === '/' || operator === '%' || operator === '=' || operator === '+/-') {
      newstack = Findresult([stack.pop(), input.join('')])
      stack = [newstack]
      input = []
      operation = operator
    }

    getDisplay()
  }

  return [addNumber, operate, getDisplay]
}

export default useCalc
