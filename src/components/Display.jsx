import React, {useState} from 'react';
import './Display.scss';
import useCalc from "./Calc";




function Display() {

    return (
        <>
            <div className="display" style={{gridArea: "d"}}>
                <div className="textodisplay">
                    0
                </div>
            </div>
        </>
    );
}

export default Display;
