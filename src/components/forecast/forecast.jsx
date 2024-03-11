import styles from './forecast.module.css'
import { forecast as forecastData } from '../../mock/data.js'
import {useState} from "react";
import SunnyIcon from '../../assets/sun.svg'
import CloudyIcon from '../../assets/sun-cloud.svg'
import RainyIcon from '../../assets/rain.svg'
import SunRainIcon from '../../assets/sun-rain.svg'
import ThunderIcon from '../../assets/thunder.svg'

export default function Forecast() {
    const [currentDate, setCurrentDate] = useState(forecastData[0].date)

    const isCurrentDate = (date) => {
        return date === currentDate
    }

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

    return <ul className={styles.forecast}>
        {forecastData.map(forecast => (
            <li
                key={forecast.date}
                className={`${styles.forecastItem} ${isCurrentDate(forecast.date) ? styles['forecastItem--active'] : ''}`}
                onClick={() => setCurrentDate(forecast.date)}
            >
                <div className={styles.header}>
                    <p className={styles.dayInWeek}>{isCurrentDate(forecast.date) ? forecast.day : forecast.day.slice(0, 3)}</p>
                            {isCurrentDate(forecast.date) ? <p className={styles.time}>{forecast.timeRange}</p> : null}
                </div>
                {
                    isCurrentDate(forecast.date) ?
                        <div className={styles.content}>
                            <div className={styles.mainData}>
                                <p className={styles.temperature}>{forecast.temperature}°C</p>
                                <div className={styles.weatherIconWrapper}>
                                    <img className={styles.weatherIcon} src={getWeather(forecast.weather)} alt=""/>
                                </div>
                            </div>
                            <ul className={styles.subData}>
                                <li className={styles.dataItem}>
                                    <p className={styles.dataTitle}>Real Feel</p>
                                    <p className={styles.dataValue}>{forecast.realFeel}°</p>
                                </li>
                                <li className={styles.dataItem}>
                                    <p className={styles.dataTitle}>Wind N-E</p>
                                    <p className={styles.dataValue}>{forecast.wind} km/h</p>
                                </li>
                                <li className={styles.dataItem}>
                                    <p className={styles.dataTitle}>Pressure</p>
                                    <p className={styles.dataValue}>{forecast.pressure}MB</p>
                                </li>
                                <li className={styles.dataItem}>
                                    <p className={styles.dataTitle}>Humidity</p>
                                    <p className={styles.dataValue}>{forecast.humidity}%</p>
                                </li>
                                <li className={styles.dataItem}>
                                    <p className={styles.dataTitle}>Sunrise</p>
                                    <p className={styles.dataValue}>{forecast.sunrise}</p>
                                </li>
                                <li className={styles.dataItem}>
                                    <p className={styles.dataTitle}>Sunset</p>
                                    <p className={styles.dataValue}>{forecast.sunset}</p>
                                </li>
                            </ul>
                        </div> : <div className={styles.mainTemperature}>
                            <img className={styles.mainWeatherIcon} src={getWeather(forecast.weather)} alt=""/>
                            <p className={styles.mainTemperatureText}>
                                {forecast.temperature}°
                            </p>
                        </div>
                }
            </li>
        ))}
    </ul>
}