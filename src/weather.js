import React from "react";
import "./weather.css";

export default function Weather() {
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
          <h1> Kyiv UA </h1>
          <p>Overcast clouds</p>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            asl="description"
           
          />
        </div>
        <div className="col-3">
          <h1>6ºC</h1>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 42%</li>
            <li>Wind: 0 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
