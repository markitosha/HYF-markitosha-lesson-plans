import Cat from "./Cat";
import styles from "../cats.module.css";
import { use, useState } from "react";

function Cats() {
    const [catsArray, setCatArray] = useState([{
        name: 'Waffle',
        age: 8,
        id: 1,
    }, {
        name: 'Cat',
        age: 1,
        id: 2
    }, {
        name: 'Dog',
        age: 20,
        id: 3
    }]);

    return (
        <div className={styles.container}>
            {/*<Cat name="Waffle" age={8} showChildren={false}>*/}
            {/*    <div>Waffle is a good cat</div>*/}
            {/*    akjdhfaksjdhfsak*/}
            {/*    <Cat />*/}
            {/*</Cat>*/}
            {/*<Cat name="Cat" age={1} />*/}
            {catsArray.map((cat) => (
                <Cat
                    key={cat.id}
                    name={cat.name}
                    age={cat.age}
                />
            ))}
            <button>add new</button>
        </div>
    )
};

export default Cats;
