import React from 'react';
import './Operation.scss';
import useCalc from "./Calc";

var sign = {
    '+': 'add',
    '-': 'sub',
    '*': 'mul',
    '/': 'div',
    '=': 'equal',
    '%': 'mod',
    '+/-': 'abs',
    'C': 'c',
};

function Operation({operation}) {

    const operate = useCalc()[1];

    const handleClick = () => {
        operate(operation);
    }

    return (
        <div className="OperationButton" id={"Button" + operation} style={{gridArea: sign[operation]}}>
            <button onClick={handleClick}>
                {operation}
            </button>
        </div>
    );
}

export default Operation;
