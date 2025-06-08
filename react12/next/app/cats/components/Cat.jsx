'use client';

import styles from "../cats.module.css";

export default function Cat({ name, age, children, showChildren }) {
    // 1st
    // const name = props.name;
    // const age = props.age;
    //
    // // 2nd
    // const name2 = props['name'];
    // const age3 = props['age'];
    //
    // // 3rd
    // const { name: name3, age: age4 } = props;

    return (
        <div className={styles.card}>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>In 2 year: {age + 2}</div>
            {age >= 7 ? 'Insurance is expensive' : 'Insurance is cheap'}
            {showChildren && children && <div>{children}</div>}
        </div>
    );
}
