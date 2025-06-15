'use client';

import { useState } from "react";
import styles from "./NewCatForm.module.css";

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

    return <button onClick={handleClick}>Add new cat, please</button>
}
