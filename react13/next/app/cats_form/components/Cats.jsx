'use client';

import Cat from "./Cat";
import styles from "../cats.module.css";
import NewCatForm from "@/app/cats_form/components/NewCatForm";
import { useState } from "react";

const CATS_ARRAY_DEFAULT = [{
    name: 'Waffle',
    age: 8,
    id: 1,
}, {
    name: 'Cat',
    age: 1,
    id: 2
}, {
    name: 'Dog',
    age: 20,
    id: 3
}];

function Cats() {
    const [catsArray, setCatsArray] = useState(CATS_ARRAY_DEFAULT);

    // data = { name: 'New Cat', age: 2 }
    function handleAdd(data) {
        setCatsArray(prev => [...prev, {
            ...data,
            id: Date.now().toString()
        }]);
    }

    return (
        <div className={styles.container}>
            {catsArray.map((cat) => (
                <Cat
                    key={cat.id}
                    name={cat.name}
                    age={cat.age}
                />
            ))}
            <NewCatForm onAdd={handleAdd} />
        </div>
    )
};

export default Cats;
