import "./App.css";
//import axios from "axios";
import Weather from "./weather.js";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> Weather App</h1>
        <Weather defaultCity="Kyiv" />
      </div>
    </div>
  );
}
