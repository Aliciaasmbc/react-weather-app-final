import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather.js";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />

        <footer>
          {" "}
          This project was coded with 💜 by Alicia Apreala and is{" "}
          <a
            href="https://github.com/Aliciaasmbc/react-weather-app-final"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
