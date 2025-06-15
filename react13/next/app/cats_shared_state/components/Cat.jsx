'use client';

import styles from "../cats.module.css";
import { useState } from "react";

function CatInfo({ age, name, onNameChange, onAgeChange }) {
    return (
        <>
            <input name={'name'} onChange={onNameChange} value={name}/>
            <input name={'age'} onChange={onAgeChange} value={age}/>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>In 2 year: {age + 2}</div>
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

export default function Cat({ name, age }) {
    const [nameInternal, setNameInternal] = useState(name);
    const [ageInternal, setAgeInternal] = useState(age);

    const handleNameChange = (event) => {
        console.log('haldleChange', event.target.value);

        setNameInternal(event.target.value);
    }

    const handleAgeChange = (event) => {
        console.log('handleAgeChange', event.target.value);

        setAgeInternal(event.target.value);
    }

    return (
        <div className={styles.card}>
            <CatInfo name={nameInternal} age={ageInternal} onNameChange={handleNameChange} onAgeChange={handleAgeChange} />
            <CatInsurance name={nameInternal} age={ageInternal} />
        </div>
    );
}
