import {useState} from 'react'
import './App.css'
import Header from "./header/header.jsx";
import Forecast from "./components/forecast/forecast.jsx";
import ChanceOfRain from "./components/chanceOfRain/chanceOfRain.jsx";
import Wind from "./components/wind/wind.jsx";
import Uv from "./components/uv/uv.jsx";
import Humidity from "./components/humidity/humidity.jsx";
import Visibility from "./components/visibility/visibility.jsx";
import More from "./components/more/more.jsx";
import City from "./components/city/city.jsx";


function App() {
    const [mode, setMode] = useState('forecast') // forecast, airQuality

    const toggleMode = () => {
        setMode(mode === 'forecast' ? 'airQuality' : 'forecast')
    }

    return (
        <main className="main">
            <Header/>
            <div className="content">
                <div className="forecastHeader">
                    <p className="title">Friday Mar 15 2024 & Next 7 Days</p>
                    <div className={`switchButton ${mode === 'airQuality' ? 'switchButton--airQuality' : ''}`}
                         onClick={toggleMode}>
                        <span className="switchButtonText">Forecast</span>
                        <span className="switchButtonText">Air Quality</span>
                    </div>
                </div>
                <div className="chanceOfRainHeader">
                    <p className="title">Chance of Rain</p>
                </div>
                <div className="forecast">
                    <Forecast/>
                </div>
                <div className="chanceOfRain">
                    <ChanceOfRain/>
                </div>
                <div className="overview">
                    <p className="title">Today's Overview</p>
                </div>
                <div className="cityHeader">
                    <p className="title">City</p>
                </div>
                <div className="wind">
                    <Wind/>
                </div>
                <div className="uv">
                    <Uv/>
                </div>
                <div className="humidity">
                    <Humidity/>
                </div>
                <div className="visibility">
                    <Visibility/>
                </div>
                <div className="more">
                    <More/>
                </div>
                <div className="city">
                    <City/>
                </div>
            </div>
        </main>
    )
}

export default App
