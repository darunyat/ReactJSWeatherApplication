import React, { useState } from "react";
import "./weather.css";
import axios from "axios";
import FormatedDate from "./formateddate";
import { RevolvingDot } from "react-loader-spinner";
import Forecast from "./forecast";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState(props.defaultCity);

  function showForecast(response) {
    setWeatherData({
      coord: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
      country: response.data.sys.country,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      timezone: response.data.timezone,
      date: new Date(response.data.dt * 1000),
    });

    setReady(true);
  }

  function handleSearch(event) {
    setLocation(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a161492f71b97ed4d827ea73bfed8c93&units=metric`;
    axios.get(apiUrl).then(showForecast);
  }
  if (ready) {
    return (
      <div className="code">
        <div className="Weather">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city"
                  className="form-control"
                  autoFocus="on"
                  onChange={handleSearch}
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
              <p className="text-capitalize">
                <FormatedDate date={weatherData.date} />
              </p>
              <p className="text-uppercase">{weatherData.description}</p>
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
                <li className="text-uppercase">
                  Humidity: {weatherData.humidity}%
                </li>
                <li className="text-uppercase">
                  Wind: {Math.round(weatherData.wind)} km/h
                </li>
              </ul>
            </div>
            <Forecast coord={weatherData.coord} />
          </div>
        </div>
        <p className="text-center mt-5">
          This code is{" "}
          <a
            className="link"
            href="https://github.com/darunyat/react-application.git"
            target="_blank"
            rel="noreferrer"
          >
            opensourced
          </a>{" "}
          🐈
        </p>
      </div>
    );
  } else {
    search();
    return (
      <div className="d-flex selft-align-center">
        <RevolvingDot
          height="100"
          width="100"
          radius="6"
          color="#4fa94d"
          secondaryColor=""
          ariaLabel="revolving-dot-loading"
          wrapperStyle={{
            display: `block`,
            margin: `0 auto`,
          }}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
}
