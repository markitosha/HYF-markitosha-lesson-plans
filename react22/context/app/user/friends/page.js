'use client';

import { useState } from "react";

export default function Home() {
    // render list

    // add new friend
    // change friend name
    // delete friend

    const [friends, setFriends] = useState(friendsInit);

    const handleAdd = () => {
        setFriends([...friends, { id: friends.length + 1, name: 'New Friend' }]);
    };

    const handleChange = (id, name) => {
        setFriends(friends.map((f) => f.id === id ? { ...f, name } : f));
    }

    const handleDelete = (id) => {
        setFriends(friends.filter((f) => f.id !== id));
    }

    return <div>Friends page: request data about all friends (we need userId here)</div>
}

const friendsInit = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Eve' },
];