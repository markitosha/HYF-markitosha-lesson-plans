'use client';

import Link from "next/link";
import { Avatar } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "@/app/user/context/UserContext";

export default function Navbar() {
    const user = useContext(UserContext);

    return (
        <header className={'bg-blue-400 text-white flex justify-end p-4 gap-4 items-center'}>
            <Link href={"/user"}>Home</Link>
            <Link href={"/user/personal"}>Personal Info</Link>
            <Link href={"/user/friends"}>Friends</Link>
            <Avatar src={user?.image_url}/>
        </header>
    )
}