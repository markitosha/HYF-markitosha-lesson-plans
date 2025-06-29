'use client';

import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
    const { user_id } = useParams();
    const pathname = usePathname();
    const query = useSearchParams();

    // useEffect( () => {
    //     (async () => {
    //         await fetch(pathname)
    //     })();
    // }, [])

    return <div>This is a user page: {user_id}, pathname: {pathname}, search: {query.get('search')}</div>
}
