
import styles from './humidity.module.css'
import HumidityImage from '../../assets/humidity-image.svg'
import TwoDropImage from '../../assets/two-drop.svg'
export default function Humidity() {
    return <div className={styles.humidity}>
        <p className={styles.title}>Humidity</p>
        <img className={styles.humidityImage} src={HumidityImage} alt="Humidity" />
        <div className={styles.data}>
            <p className={styles.value}>84%</p>
            <p className={styles.instruction}>
                <img src={TwoDropImage} alt="Two drop" />
                The dew point is 270 right now</p>
        </div>
    </div>
}