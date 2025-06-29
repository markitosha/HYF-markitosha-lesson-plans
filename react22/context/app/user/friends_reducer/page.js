'use client';

import { useReducer, useState } from "react";

function reducer(state = [], action) {
    switch (action.type) {
        case 'add': {
            return [...state, { id: state.length + 1, name: 'New Friend' }];
        }
        case 'change': {
            return state.map((f) => f.id === action.id ? { ...f, name: action.name } : f);
        }
        case 'delete': {
            return state.filter((f) => f.id !== action.id);
        }
        default: {
            return state;
        }
    }
}

export default function Home() {
    // render list

    // add new friend
    // change friend name
    // delete friend

    const [state, dispatch] = useReducer(reducer, friendsInit);

    const handleAdd = () => {
        dispatch({
            type: 'add'
        });
    };

    const handleChange = (id, name) => {
        dispatch({
            type: 'change',
            id,
            name
        });
    }

    const handleDelete = (id) => {
        dispatch({
            type: 'delete',
            id
        })
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