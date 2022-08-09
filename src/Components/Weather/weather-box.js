import React, { useState } from "react";
import "./weather-box.css"
import axios from "axios";


const WeatherBox = () => {

    const [data, setData] = useState({});
    const [location, setLocation] = useState('Morgantown');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=df2de3900e635249f5651233e62fd47c`;
  
    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data)
                console.log(response.data)
            })
            setLocation('')
        }
    }
    return (
        
        <div className="weather">
            <div className="search">
                <input
                    value={location}
                    onChange={event => setLocation(event.target.value)}
                    onKeyPress={searchLocation}
                    placeholder='Enter Location'
                    type="text" />
            </div>
            <div className="location">
                <p>{data.name}</p>
            </div>
            <div className="temperature">
                <p>{data.main.temp.toFixed()}°F</p>
            </div>
            <div className="weather-description">
                <p>{data.weather[0].main}</p>
            </div>

        </div>
    );
}

export default WeatherBox;