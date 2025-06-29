'use client';

import { useState } from "react";

export default function NewCatForm({ onAdd }) {
    const [isFormVisible, setIsFormVisible] = useState(false);

    function handleClick() {
        setIsFormVisible(true);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const name = formData.get('name');
        const age = formData.get('age');

        console.log({ name, age });

        onAdd({ name, age });
        setIsFormVisible(false);
    }

    if (isFormVisible) {
        return (
            <form className={'flex flex-col gap-4'} onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" className={'border rounded-md p-1'}/>
                </label>
                <label>
                    Age:
                    <input type="number" name="age" className={'border rounded-md p-1'}/>
                </label>
                <button type="submit" className={'border rounded-md bg-amber-50'}>Add</button>
            </form>
        );
    }

    return <button onClick={handleClick} className='border rounded-md bg-amber-50'>Add new cat, please</button>
}
