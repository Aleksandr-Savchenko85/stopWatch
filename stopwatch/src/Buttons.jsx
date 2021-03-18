import React from 'react'

const Buttons = ({ start, stopTimer, resetTimer, waitTimer, status }) => {

    return (
        <div className="board-btn">
            {status === 0 ? <button className="start" onClick={start}>start</button> : ""}
            {status === 1 ? <div>
                <button className="stop" onClick={stopTimer}>stop</button>
                <button className="wait" onDoubleClick={waitTimer}>wait</button>
                <button className="reset" onClick={resetTimer}>reset</button>
            </div> : ""}
        </div>

    )
};


export default Buttons;