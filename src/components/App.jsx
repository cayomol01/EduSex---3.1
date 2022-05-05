import React from 'react';
import './App.scss';
import Number from "./Number";
import Display from "./Display";
import Operation from "./Operation";

function App() {
    return (
        <>
            <h1>Hello World</h1>

            <div className="CalculatorArea">
                <Display/>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10].map(number => (
                    <Number digit={number}/>
                ))}
                {['+', '-', '*', '/',"%","+/-","C","="].map(operator => (
                    <Operation operation={operator}/>
                ))}
            </div>
        </>
    );
}

export default App;
