'use client';

import { useContext } from "react";
import { CatContext } from "@/app/cats/CatContext";

function CatInfo({ id }) {
    const { catsArray, onAgeChange, onNameChange } = useContext(CatContext);
    const { age, name } = catsArray.find(cat => cat.id === id);

    const handleNameChange = (event) => {
        console.log('haldleNameChange', event.target.value);

        onNameChange(id, event.target.value);
    }

    const handleAgeChange = (event) => {
        console.log('handleAgeChange', event.target.value);

        onAgeChange(id, event.target.value);
    }

    return (
        <>
            <input name={'name'} onChange={handleNameChange} value={name} className={'border rounded-md p-1'}/>
            <input name={'age'} onChange={handleAgeChange} value={age} className={'border rounded-md p-1'}/>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>In 2 year: {+age + 2}</div>
        </>
    )
}

function CatInsurance({ id }) {
    const { catsArray } = useContext(CatContext);
    const { age, name } = catsArray.find(cat => cat.id === id);

    return (
        <div>
            {name}'s {age >= 7 ? 'Insurance is expensive' : 'Insurance is cheap'}
        </div>
    )
}

export default function Cat({ id, }) {
    return (
        <div className='p-2 border rounded-md shadow-md gap-1 flex flex-col'>
            <CatInfo id={id} />
            <CatInsurance id={id} />
        </div>
    );
}
