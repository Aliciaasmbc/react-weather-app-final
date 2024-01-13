import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather.js";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="salon de provence" />

        <footer>
          {" "}
          This project was coded with 💜 by{" "}
          <a
            href="https://www.linkedin.com/in/alicia-apreala-8a26a552/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alicia Apreala
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Aliciaasmbc/react-weather-app-final"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
