'use client';

import { useState } from "react";
import styles from './attributes.module.css';

const foo = () => 'test';

const active = true;

export default function Page() {
    // you don't need to understand it (!!!!!)
    const [value, setValue] = useState(foo());
    // end

    const handleChange = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);
    };

    return <input
        value={value}
        onChange={handleChange}
        className={`${styles.attributes} ${styles.page} ${active ? styles.active : ''}`}
        id={'123'}
    ></input>
}
