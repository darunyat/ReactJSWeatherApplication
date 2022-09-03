import React from "react";
import "./forecast.css";
export default function Forecast() {
  return (
    <div className="weatherForecast">
      <div className="row">
        <br />
        <hr />
        <div className="col-2">
          <div className="weatherForecast-day text-center">SAT</div>
          <div className="weatherForecast-img  ms-2">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="#"
            />
          </div>
          <div className="weatherForecast-temp">
            <span className="weatherForecast-temp-max me-1">17º</span>
            <strong>|</strong>
            <span className="weatherForecast-temp-min ms-1">10º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
