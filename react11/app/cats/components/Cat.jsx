import styles from "@/app/cats/cats.module.css";

export default function Cat() {
    const name = "Waffle";
    const age = 8;

    // only JS

    // `${}`
    return (
        <>
            <div className={styles.page}>Name: {name}</div>
            <div>Age: {age}</div>
            <div>In 2 year: {age + 2}</div>
            {/*{if (age >= 7) {}}*/}
            {age >= 7 ? 'Insurance is expensive' : 'Insurance is cheap'}
        </>
    );
}
