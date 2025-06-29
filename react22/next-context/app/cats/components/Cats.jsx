'use client';

import Cat from "./Cat";
import NewCatForm from "@/app/cats/components/NewCatForm";
import { useEffect, useState } from "react";

// Can we replace with Server component?

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

    function handleCatNameChange(id, newName) {
        setCatsArray(prev => prev.map(cat => cat.id === id ? { ...cat, name: newName } : cat));
    }

    function handleCatAgeChange(id, newAge) {
        setCatsArray(prev => prev.map(cat => cat.id === id ? { ...cat, age: newAge } : cat));
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <div className='flex gap-2'>
            {catsArray.map((cat) => (
                <Cat
                    key={cat.id}
                    name={cat.name}
                    age={cat.age}
                    onNameChange={(newName) => handleCatNameChange(cat.id, newName)}
                    onAgeChange={(newAge) => handleCatAgeChange(cat.id, newAge)}
                />
            ))}
            <NewCatForm onAdd={handleAdd} />
        </div>
    )
};

export default Cats;
