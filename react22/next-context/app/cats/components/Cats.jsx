'use client';

import Cat from "./Cat";
import NewCatForm from "@/app/cats/components/NewCatForm";
import { useContext } from "react";
import { CatContext } from "@/app/cats/CatContext";

// Can we replace with Server component?

function Cats() {
    const { catsArray, onAdd } = useContext(CatContext);

    return (
        <div className='flex gap-2'>
            {catsArray.map((cat) => (
                <Cat
                    key={cat.id}
                    id={cat.id}
                />
            ))}
            <NewCatForm onAdd={onAdd}/>
        </div>
    )
};

export default Cats;
