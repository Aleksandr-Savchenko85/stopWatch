import React from 'react'



const Timer = ({ time }) => {





    return (
        <div className="timer">
            <span className="hours">{(time.HH >= 10) ? time.HH : "0" + time.HH}</span>&nbsp;:&nbsp;
            <span className="hours">{(time.MM >= 10) ? time.MM : "0" + time.MM}</span>&nbsp;:&nbsp;
            <span className="hours">{(time.SS >= 10) ? time.SS : "0" + time.SS}</span>
        </div>

    )
};


export default Timer;