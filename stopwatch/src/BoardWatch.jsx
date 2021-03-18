import React, { useState } from 'react'
import Timer from './Timer';
import Buttons from './Buttons';


const BoardWatch = () => {
    const [time, setTime] = useState({ SS: 0, MM: 0, HH: 0 });
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);

    const startTimer = () => {
        runTimer();
        setStatus(1)
        setInterv(setInterval(runTimer, 1000))
    };

    const stopTimer = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({ SS: 0, MM: 0, HH: 0 });
    };

    const waitTimer = () => {
        clearInterval(interv);
        setStatus(0);
    };

    const resetTimer = () => {
        clearInterval(interv);
        setTime({ SS: 0, MM: 0, HH: 0 });
        setStatus(1);
        setInterv(setInterval(runTimer, 1000))

    };


    let updatedSS = time.SS
    let updatedMM = time.MM
    let updatedHH = time.HH

    const runTimer = () => {
        if (updatedMM === 60) {
            updatedHH++;
            updatedMM = 0;
        }
        if (updatedSS === 60) {
            updatedMM++;
            updatedSS = 0;

        }
        updatedSS++;
        return setTime({ SS: updatedSS, MM: updatedMM, HH: updatedHH })
    };

    return (
        <>
            <h1 className="name">stopwatch</h1>
            <div className="board-timer">
                <Timer
                    time={time}
                />
                <Buttons
                    status={status}
                    start={startTimer}
                    stopTimer={stopTimer}
                    resetTimer={resetTimer}
                    waitTimer={waitTimer}

                />

            </div>
        </>
    )
};


export default BoardWatch;