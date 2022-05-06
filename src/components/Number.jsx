import React from 'react';
import './Number.scss';
import useCalc from './Calc'

const lista = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "dot"];


function Number({digit}) {
    if (digit === 10) {
        digit = "."
    }

    const addNumber = useCalc()[0];

    const handleClick = () => {
        addNumber(digit);

    }

    return (
        <div className="NumberButton" id={"Button" + digit} style={{gridArea: lista[digit]}}>
            <button onClick={handleClick}>
                {digit}
            </button>
        </div>
    );
}

export default Number;
