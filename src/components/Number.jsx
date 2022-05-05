import React from 'react';
import './Number.scss';

const lista = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];

function Number({digit}) {
    return (
        <div className="NumberButton" id={"Button" + digit} style={{gridArea: lista[digit]}}>
            <button>
                {digit}
            </button>
        </div>
    );
}

export default Number;
