'use client';

import { useState } from "react";

export default function Page() {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <div>{counter}</div>
            <button onClick={() => {
                setCounter(counter + 1);
            }}>Increase</button>
            <button onClick={() => {
                // NO
                // setCounter(counter + 1);
                // setCounter(counter + 1);

                // Sane way to fix it
                // setCounter(counter + 2);
                // setCounter(prevState => prevState + 2);

                // YES
                setCounter(prevState => prevState + 1);
                setCounter(prevState => prevState + 1);
            }}>Increase 2</button>
        </>
    );
}
