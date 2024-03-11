import styles from './more.module.css'

export default function More() {
    return <div className={styles.more}>
        <p className={styles.guide}>Explore global map of wind weather and ocean condition </p>
        <button className={styles.button}>GET STARTED</button>
    </div>
}