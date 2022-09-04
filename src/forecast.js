import React, { useState } from "react";
import "./forecast.css";
import axios from "axios";
import { RevolvingDot } from "react-loader-spinner";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState({});

  function showDailyForecast(response) {
    console.log(response);
    setForecast({
      icon: `http://openweathermap.org/img/wn/${response.data.daily[0].weather[0].icon}.png`,
      date: response.data.daily[0].dt,
      tempMax: response.data.daily[0].temp.max,
      tempMin: response.data.daily[0].temp.min,
    });
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="weatherForecast">
        <div className="row">
          <br />
          <hr />
          <div className="col-2">
            <div className="weatherForecast-day text-center">
              {forecast.date}
            </div>
            <div className="weatherForecast-img  ms-2">
              <img src={forecast.icon} alt="description" />
            </div>
            <div className="weatherForecast-temp">
              <span className="weatherForecast-temp-max me-1">
                {Math.round(forecast.tempMax)}º
              </span>
              <strong>|</strong>
              <span className="weatherForecast-temp-min ms-1">
                {Math.round(forecast.tempMin)}º
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `a161492f71b97ed4d827ea73bfed8c93`;
    let lat = props.coord.lat;
    let lon = props.coord.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showDailyForecast);
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
