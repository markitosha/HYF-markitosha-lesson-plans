'use client';

import { useRef, useEffect } from "react";
import Button from '@mui/material/Button';

export default function Page() {
    const myRef = useRef(null);

    useEffect(() => {
        console.log(myRef.current);
        myRef.current.focus();

        // myRef.current.addEventListener();
        // setTimeout

        return () => {
            // myRef.current.removeEventListener();
            // clearTimeout
        }
    }, []);
//<></>
    return <form>
        <input name={'test'} className={'border'} />
        <input name={'test2'} className={'border'} ref={myRef} />
        <input name={'test4'} className={'border'} />
        <Button variant="contained">TEST</Button>
    </form>
}
