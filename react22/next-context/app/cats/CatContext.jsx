import { createContext, useEffect, useState } from "react";

export const CatContext = createContext({
    catsArray: [],
    onNameChange: () => {},
    onAgeChange: () => {},
});

export function CatProvider({ children }) {
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


    return (
        <CatContext.Provider value={{
            catsArray,
            onNameChange: handleCatNameChange,
            onAgeChange: handleCatAgeChange,
            onAdd: handleAdd,
        }}>
            {children}
        </CatContext.Provider>
    );
}