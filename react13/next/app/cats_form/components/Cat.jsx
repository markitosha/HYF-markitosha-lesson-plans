'use client';

import styles from "../cats.module.css";
import { useState } from "react";

function CatInfo({ age, name }) {
    const [nameInternal, setNameInternal] = useState(name);
    const [ageInternal, setAgeInternal] = useState(age);

    const handleNameChange = (event) => {
        console.log('haldleNameChange', event.target.value);

        setNameInternal(event.target.value);
    }

    const handleAgeChange = (event) => {
        console.log('handleAgeChange', event.target.value);

        setAgeInternal(event.target.value);
    }

    return (
        <>
            <input name={'name'} onChange={handleNameChange} value={nameInternal}/>
            <input name={'age'} onChange={handleAgeChange} value={ageInternal}/>
            <div>Name: {nameInternal}</div>
            <div>Age: {ageInternal}</div>
            <div>In 2 year: {ageInternal + 2}</div>
        </>
    )
}

function CatInsurance({ name, age }) {
    return (
        <div>
            {name}'s {age >= 7 ? 'Insurance is expensive' : 'Insurance is cheap'}
        </div>
    )
}

export default function Cat({ name, age, children, showChildren }) {
    return (
        <div className={styles.card}>
            <CatInfo name={name} age={age} />
            <CatInsurance name={name} age={age} />
            {showChildren && children && <div>{children}</div>}
        </div>
    );
}
