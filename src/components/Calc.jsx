import React from 'react';
import './Calc.scss';

let stack = [];
let input = [];
let operation = "";
let newstack = "";


const useCalc = () => {
    const addNumber = (number) => {
        if (input.length <= 8) {

            if (number === ".") {
                if (input.length === 0) {
                    input.push("0");
                }
                if (input.indexOf(".") === -1) {
                    input.push(number);
                }
            } else {
                input.push(number);
            }
        }
        getDisplay()
    };

    const getDisplay = () => {
        let text;
        if (input.length > 0) {
            text = input.join("");
        } else {
            text = stack[0];
        }
        document.body.getElementsByClassName("textodisplay")[0].innerHTML = text
    }

    const result = (input) => {
        let result
        let input2 = 0;
        if (input[1]) {
            input2 = parseFloat(input[1]);
        }

        let input1 = parseFloat(input[0]);

        console.log(input[1],input1, input2);

        if (operation === "+") {
            result = input1 + input2;
        } else if (operation === "-") {
            result = input1 - input2;
        } else if (operation === "*") {
            result = input1 * input2;
        } else if (operation === "/") {
            if (input2 === 0) {
                alert("No se puede dividir entre 0");
                result = 0;
            } else {
                result = input1 / input2;
            }
        } else if (operation === "%") {
            result = input1 % input2;
        } else {
            if (input[1]) {
                result = input2;
            } else {
                result = input1;
            }

        }
        operation = "";
        result = result.toString().substring(0,9);
        return result;
    }

    const operate = (operator) => {

        if (operator === "C") {
            input = [];
            stack = ["0"];
        } else if (operator === "+/-"){
            if (input.length > 0) {
                stack = [input.join("")];
            }
            input = [];
            stack = [stack[0] * -1];
        }
        else {
            if (stack.length === 0) {
                stack = [input.join("")];
                input = [];
                operation = operator;
            } else {
                if (operator === "+" || operator === "-" || operator === "*" || operator === "/" || operator === "%" || operator === "=" || operator === "+/-") {
                    newstack = result([stack.pop(), input.join("")]);
                    stack = [newstack];
                    input = [];
                    operation = operator;
                } else if (operator === "+/-") {
                    if (input.length === 0) {
                        stack = [stack[0] * -1];
                    } else {
                        stack = [input.join("")];
                        input = [];
                        stack = [stack[0] * -1];
                    }
                }
            }

        }

        getDisplay()
    }

    return [addNumber, operate, getDisplay];
}

export default useCalc;
