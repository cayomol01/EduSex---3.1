import React from 'react';
import './Display.scss';

function Display() {
    return (
        <>
            <div className="display" style={{gridArea: "d"}}>
                <div className="display__text">
                    <p>0</p>
                </div>
            </div>
        </>
    );
}

export default Display;
