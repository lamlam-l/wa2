import styles from './uv.module.css'
import UvGraph from '../../assets/uv-graph.svg'

export default function Uv() {
    return <div className={styles.uv}>
        <p className={styles.title}>UV Indesx</p>
        <img className={styles.UvGraph} src={UvGraph} alt="" />
        <p className={styles.text}>
            <span className={styles.value}>5.50</span> uv
        </p>
    </div>
}