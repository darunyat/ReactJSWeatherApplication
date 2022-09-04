import "./App.css";
//import axios from "axios";
import Weather from "./weather.js";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="mt-5"> </h1>
        <Weather defaultCity="Lison" />
      </div>
    </div>
  );
}
