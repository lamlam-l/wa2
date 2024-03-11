
import styles from './chanceOfRain.module.css'
export default function ChanceOfRain() {
    return <div className={styles.chanceOfRain}>
        <div className={styles.yLable}>Rainy</div>
        <div className={styles.yLable}>Sunny</div>
        <div className={styles.yLable}>Heavy</div>
        <div className={styles.xBar}>
            <div className={styles.bar}></div>
            <p className={styles.label}>10AM
            </p>
        </div>
        <div className={styles.xBar}>
            <div className={styles.bar}></div>
            <p className={styles.label}>11AM
            </p>
        </div>
        <div className={styles.xBar}>
            <div className={styles.bar}></div>
            <p className={styles.label}>12AM
            </p>
        </div>
        <div className={styles.xBar}>
            <div className={styles.bar}></div>
            <p className={styles.label}>01PM
            </p>
        </div>
        <div className={styles.xBar}>
            <div className={styles.bar}></div>
            <p className={styles.label}>02PM
            </p>
        </div>
        <div className={styles.xBar}>
            <div className={styles.bar}></div>
            <p className={styles.label}>03PM
            </p>
        </div>
    </div>
}