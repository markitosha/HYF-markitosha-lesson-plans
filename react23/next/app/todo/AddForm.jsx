'use client';

import { addData } from "@/app/todo/action";
import { useActionState } from "react";

export default function AddForm() {
    const [state, action, pending] = useActionState(addData, '');

    return (
        <form action={action} className={'flex gap-2'}>
            <input name={'text'} className={'border rounded-md'} />
            <button type={'submit'} className={'border rounded-md px-2'}>Add</button>
            {pending && <span>Loading...</span>}
            {state && state.error && <p style={{ color: 'red' }}>{state.error}</p>}
        </form>
    )
}
