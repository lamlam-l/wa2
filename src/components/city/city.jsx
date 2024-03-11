import styles from './city.module.css'
import {city as cities} from '../../mock/data.js'
import SunnyIcon from '../../assets/sun.svg'
import CloudyIcon from '../../assets/sun-cloud.svg'
import RainyIcon from '../../assets/rain.svg'
import SunRainIcon from '../../assets/sun-rain.svg'
import ThunderIcon from '../../assets/thunder.svg'

export default function City() {

    const getWeather = (weather) => {
        switch (weather) {
            case 'sunny':
                return SunnyIcon
            case 'cloudy':
                return CloudyIcon
            case 'rainy':
                return RainyIcon
            case 'sun-rain':
                return SunRainIcon
            case 'thunder':
                return ThunderIcon
            default:
                return SunnyIcon
        }
    }

    return <ul className={styles.cityList}>
        {cities.map(city => <li key={city.city} className={styles.city}>
            <div className={styles.data}>
                <p className={styles.country}>{city.country}</p>
                <p className={styles.name}>{city.city}</p>
                <p className={styles.weather}>{city.text}</p>
            </div>
            <img className={styles.weatherImage} src={getWeather(city.weather)} alt="" />
        </li>)}
    </ul>
}