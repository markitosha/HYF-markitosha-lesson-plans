'use client';

import Cats from './components/Cats';
import { CatProvider } from "@/app/cats/CatContext";

export default function Page() {
    return (
        <CatProvider>
            <Cats/>
        </CatProvider>
    );
}
