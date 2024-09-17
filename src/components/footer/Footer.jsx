import styles from "./footer.module.css";

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Dev</div>
            <div className={styles.text}>
                Dev © All rights reserved.
            </div>
        </div>
    );
}
