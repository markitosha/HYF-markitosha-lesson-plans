import Cat from "./Cat";
import styles from "../cats.module.css";

function Cats() {
    return (
        <div className={styles.container}>
            <Cat name="Waffle" age={8} showChildren={false}>
                <div>Waffle is a good cat</div>
                akjdhfaksjdhfsak
                <Cat />
            </Cat>
            <Cat name="Cat" age={1} />
        </div>
    )
};

export default Cats;
