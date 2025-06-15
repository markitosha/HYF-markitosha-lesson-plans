'use client';

import styles from "../cats.module.css";
import { useState } from "react";

function CatInfo({ age, name }) {
    // Flat way
    const [nameInternal, setNameInternal] = useState(name);
    const [ageInternal, setAgeInternal] = useState(age);

    let randomVar = 'before'

    const handleNameChange = (event) => {
        console.log('haldleChange', event.target.value);

        setNameInternal(event.target.value);
    }

    const handleAgeChange = (event) => {
        console.log('handleAgeChange', event.target.value);

        setAgeInternal(event.target.value);
    }

    // { name: 'Waffle', age: 8 }
    // { name: 'Cat' }
    // => { name: 'Cat' }

    // Object way
    const [state, setState] = useState({
        'name-obj': name,
        'age-obj': age
    });

    const handleStateChange = (event) => {
        console.log('handleStateChange', event.target.value);
        randomVar = event.target.value;

        setState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    console.log('randomVar', randomVar);

    return (
        <>
            <input name={'name'} onChange={handleNameChange} value={nameInternal}/>
            <input name={'name-obj'} onChange={handleStateChange} value={state['name-obj']}/>
            <input name={'age'} onChange={handleAgeChange} value={ageInternal}/>
            <input name={'age-obj'} onChange={handleStateChange} value={state['age-obj']}/>
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

export default function Cat({ name, age, children, showChildren, onChange }) {
    // 1st
    // const name = props.name;
    // const age = props.age;
    //
    // // 2nd
    // const name2 = props['name'];
    // const age3 = props['age'];
    //
    // // 3rd
    // const { name: name3, age: age4 } = props;
    // let nameInternal = '';

    return (
        <div className={styles.card}>
            <CatInfo name={name} age={age} />
            <CatInsurance name={name} age={age} />
            {showChildren && children && <div>{children}</div>}
        </div>
    );
}
