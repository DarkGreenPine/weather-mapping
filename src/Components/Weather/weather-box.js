import React, { useState } from "react";
import "./weather-box.css"
import axios from "axios";

const WeatherBox = () => {

    const [data, setData] = useState({});
    const [location, setLocation] = useState('');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=df2de3900e635249f5651233e62fd47c`;
  
    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                console.log(response.data)
                setData(response.data)
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
            <div className="results">
                <div className="location">
                    <h1>{data.name}</h1>
                </div>
                <div className="temperature">
                    {data.main ? <p>{data.main.temp.toFixed()}°F</p> : null}
                </div>
                <div className="weather-description">
                    {data.main ? <p>{data.weather[0].main}</p> : null}
                </div>
            </div>

        </div>
    );
}

export default WeatherBox;