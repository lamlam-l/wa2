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

    return (
        <main className="main">
            <Header/>
            <div className="content">
                <div className="forecastHeader">
                    <p className="title">Friday Mar 15 2024 & Next 7 Days</p>
                </div>
            </div>
            <Forecast />
            <ChanceOfRain />
            <Wind />
            <Uv />
            <Humidity />
            <Visibility />
            <More />
            <City />
        </main>
    )
}

export default App
