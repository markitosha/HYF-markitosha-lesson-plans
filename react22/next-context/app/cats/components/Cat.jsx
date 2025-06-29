'use client';

function CatInfo({ age, name, onNameChange, onAgeChange }) {
    const handleNameChange = (event) => {
        console.log('haldleNameChange', event.target.value);

        onNameChange(event.target.value);
    }

    const handleAgeChange = (event) => {
        console.log('handleAgeChange', event.target.value);

        onAgeChange(event.target.value);
    }

    return (
        <>
            <input name={'name'} onChange={handleNameChange} value={name} className={'border rounded-md p-1'}/>
            <input name={'age'} onChange={handleAgeChange} value={age} className={'border rounded-md p-1'}/>
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

export default function Cat({ name, age, children, showChildren, onAgeChange, onNameChange }) {
    return (
        <div className='p-2 border rounded-md shadow-md gap-1 flex flex-col'>
            <CatInfo name={name} age={age} onAgeChange={onAgeChange} onNameChange={onNameChange} />
            <CatInsurance name={name} age={age} />
            {showChildren && children && <div>{children}</div>}
        </div>
    );
}
