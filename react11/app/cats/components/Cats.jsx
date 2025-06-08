import Cat from "./Cat";
import styles from "../cats.module.css";

function Cats() {
    return (
        <div className={styles.container}>
            <Cat />
            <Cat />
        </div>
    )
};

export default Cats;
