'use client';

import Cat from "./Cat";
import styles from "../cats.module.css";
import NewCatForm from "./NewCatForm";
import { useEffect, useState } from "react";

function Cats() {
    const [catsArray, setCatsArray] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('Were getting the data!');

        fetch(`/api/cats`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch cats');
                }

                return res.json();
            })
            .then(data => {
                console.log('We got the data!', data);

                setCatsArray(data);
                setLoading(false);
            })
            .catch(() => setError('Oh no'));
    }, []);

    // data = { name: 'New Cat', age: 2 }
    function handleAdd(data) {
        setCatsArray(prev => [...prev, {
            ...data,
            id: Date.now().toString()
        }]);
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (loading) {
        return <div>Loading...</div>;
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
