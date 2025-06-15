'use client';

import { useEffect, useState } from "react";
import styles from "./NewCatForm.module.css";

function Button({ onClick }) {
    // useEffect(() => {
    //     console.log('I am alive!');
    //
    //     return () => {
    //         console.log('I am dead!');
    //     };
    // }, []);

    return <button onClick={onClick}>Add new cat, please</button>
}

export default function NewCatForm({ onAdd }) {
    const [isFormVisible, setIsFormVisible] = useState(false);

    useEffect(() => {
        console.log('I am alive ot updating!', isFormVisible);

        // side effect
        const timer = setTimeout(() => {
            console.log('Im timer');
        }, 1000);

        function handler() {
            console.log('Im resizing!');
        }

        window.addEventListener('resize', handler);

        return () => {
            console.log('I am dead!');

            // clean side effects -- this would be Zombie if we didn't do this
            clearTimeout(timer);

            window.removeEventListener('resize', handler);
        };
    }, [isFormVisible]);

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
            <form className={styles['new-cat-form-container']} onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name"/>
                </label>
                <label>
                    Age:
                    <input type="number" name="age"/>
                </label>
                <button type="submit">Add</button>
            </form>
        );
    }

    return <Button onClick={handleClick} />
}
