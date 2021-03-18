import React from 'react'
import Timer from './Timer';
import Buttons from './Buttons';

const BoardWatch = () => {
    return (
        <>
            <h1 className="name">stopwatch</h1>
            <div className="board-timer">
                <Timer/>
                <Buttons/>

            </div>
        </>
    )
};


export default BoardWatch;