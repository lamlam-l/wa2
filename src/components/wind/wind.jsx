
import styles from './wind.module.css'
import WindChart from '../../assets/wind-chart.svg'
export default function Wind() {
    return <div className={styles.wind}>
        <p className={styles.title}>Wind Status</p>
        <img className={styles.windChart} src={WindChart} alt="" />
        <div className={styles.data}>
            <p className={styles.speed}>
                <span className={styles.speedValue}>7.50</span> km/h
            </p>
            <p className={styles.time}>6:20 AM</p>
        </div>
    </div>
}