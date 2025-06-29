'use client';

import Dashboard from "./Dashboard";
import { useContext } from "react";
import { UserContext, UserContextSetter } from "./context/UserContext";

export default function Home() {
    const user = useContext(UserContext);
    const setUser = useContext(UserContextSetter);

    return <div className={'flex flex-col gap-4'}>
        Some dashboards with statistic, personalised for the user. I don't use user data. But my children are.
        <input type="text" placeholder="Name" onChange={e => setUser({
            ...user,
            username: e.target.value
        })}/>
        <div className={'flex gap-4'}>
            <Dashboard/>
            <Dashboard/>
        </div>
    </div>
}