import React, { useState } from "react";
import "./weather.css";
import axios from "axios";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function showForecast(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
      country: response.data.sys.country,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
    });
    setReady(true);
  }
  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-light w-100"
              />
            </div>
          </div>
        </form>
        <br />
        <div className="row">
          <div className="col-9">
            <h1>
              {" "}
              {weatherData.city} {weatherData.country}{" "}
            </h1>
            <p className="text-capitalize">{weatherData.description}</p>
          </div>
        </div>
        <div className="row ">
          <div className=" col-6 d-flex align-items-baseline">
            <div className="col">
              <img src={weatherData.icon} alt="description" />
            </div>
            <div className="col">
              <h1>{Math.round(weatherData.temperature)}ºC</h1>
            </div>
          </div>
          <div className="col-6 align-self-center">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=a161492f71b97ed4d827ea73bfed8c93&units=metric`;
    axios.get(apiUrl).then(showForecast);
    return "loading...";
  }
}
