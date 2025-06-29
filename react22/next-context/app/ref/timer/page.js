'use client';

import { useRef, useState } from "react";

export default function Page() {
    const [state, setState] = useState(0);
    const timerId = useRef(null);
    // let timerId = null;

    function handleStartTimer() {
        timerId.current = setInterval(() => {
            setState(prev => prev + 1);
        }, 1000);
    }

    function handleEndTimer() {
        console.log('timerId:', timerId.current);
        timerId.current && clearInterval(timerId.current);
    }

    return (
        <div className={'flex gap-2'}>
            <div>Timers page: {state}</div>
            <button className={'border'} onClick={handleStartTimer}>Start the timer!</button>
            <button className={'border'} onClick={handleEndTimer}>Stop the timer!</button>
        </div>
    );
}