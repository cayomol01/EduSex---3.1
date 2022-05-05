import React from 'react';
import './Operation.scss';

var sign = {
    '+': 'add',
    '-': 'sub',
    '*': 'mul',
    '/': 'div',
    '=': 'equal',
    '%': 'mod',
    '+/-': 'abs',
    'C': 'c',
    '.': 'dot',
};

function Operation({operation}) {
    return (
        <div className="OperationButton" id={"Button" + operation} style={{gridArea: sign[operation]}}>
            <button>
                {operation}
            </button>
        </div>
    );
}

export default Operation;
