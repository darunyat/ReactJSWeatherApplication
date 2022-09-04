import React from "react";
import WeatherIcon from "./weatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["SUN", "MON", "TEU", "WED", "THU", "FRI"];
    return days[day];
  }
  return (
    <div>
      <div className="weatherForecast-day text-center">{day()}</div>
      <div className="weatherForecast-img d-flex ms-4">
        <WeatherIcon code={props.data.weather[0].icon} size={30} />
      </div>
      <div className="weatherForecast-temp">
        <span className="weatherForecast-temp-max me-1">
          {Math.round(props.data.temp.max)}º
        </span>
        <strong>|</strong>
        <span className="weatherForecast-temp-min ms-1">
          {Math.round(props.data.temp.min)}º
        </span>
      </div>
    </div>
  );
}
