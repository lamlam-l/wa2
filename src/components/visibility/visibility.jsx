import styles from './visibility.module.css'
import VisibilityImage from '../../assets/visibility.svg'
import eyeImage from "../../assets/eye.svg";

export default function Visibility() {
    return <div className={styles.visibility}>
        <p className={styles.title}>Visibility</p>
        <img className={styles.visibilityImage} src={VisibilityImage} alt="Visibility"/>
        <div className={styles.data}>
            <p className={styles.value}>84%</p>
            <p className={styles.instruction}>
                <img src={eyeImage} alt="eye"/>
                Haze is affecting visibility</p>
        </div>
    </div>
}