import React, { useState, useEffect } from "react";
import "./forecast.css";
import axios from "axios";
import { RevolvingDot } from "react-loader-spinner";
//import WeatherIcon from "./weatherIcon";
import WeatherForecastDay from "./weatherForecastDay";
export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState({});

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function showDailyForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);

  }

  if (loaded) {
    return (
      <div className="weatherForecast">
        <div className="row">
          <br />
          <hr />
          <div className="row">
            <div className="col">
              <WeatherForecastDay data={forecast[0]} />
            </div>
            <div className="col">
              <WeatherForecastDay data={forecast[1]} />
            </div>
            <div className="col">
              <WeatherForecastDay data={forecast[2]} />
            </div>
            <div className="col">
              <WeatherForecastDay data={forecast[3]} />
            </div>
            <div className="col">
              <WeatherForecastDay data={forecast[4]} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `d2745a818d5845e8f1379f3f894321dd`;
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
