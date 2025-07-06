'use server';

import { revalidatePath } from "next/cache";

export async function addData(state, form) {
    console.log('addData!', form.get('text'));

    await fetch('http://localhost:3000/api/todo', {
        method: 'PUT',
        body: JSON.stringify({
            text: form.get('text'),
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    });

    revalidatePath('/todo');

    return {
        error: 'sdfsdf',
        result: 'sdfsdf',
    };
}
