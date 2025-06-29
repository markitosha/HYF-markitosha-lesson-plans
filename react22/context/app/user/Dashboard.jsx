'use client';

import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export default function Dashboard() {
    const user = useContext(UserContext);

    return <div className={'w-1/2 h-[300px] rounded border border-black p-2 flex flex-col gap-2'}>
        I use user data!
        {JSON.stringify(user, '\n', 2)}
    </div>
}
