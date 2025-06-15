import Cat from "./Cat";
import styles from "../cats.module.css";

const CATS_ARRAY = [{
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
}];

function Cats() {
    return (
        <div className={styles.container}>
            {/*<Cat name="Waffle" age={8} showChildren={false}>*/}
            {/*    <div>Waffle is a good cat</div>*/}
            {/*    akjdhfaksjdhfsak*/}
            {/*    <Cat />*/}
            {/*</Cat>*/}
            {/*<Cat name="Cat" age={1} />*/}
            {CATS_ARRAY.map((cat) => (
                <Cat
                    key={cat.id}
                    name={cat.name}
                    age={cat.age}
                />
            ))}
        </div>
    )
};

export default Cats;
