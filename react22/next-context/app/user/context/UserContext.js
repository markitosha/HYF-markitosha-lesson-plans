'use client';

import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext(null);
export const UserContextSetter = createContext(null);

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch('/api/user')
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);

    return (
        <UserContext.Provider value={user}>
            <UserContextSetter.Provider value={setUser}>
                {children}
            </UserContextSetter.Provider>
        </UserContext.Provider>
    );
}