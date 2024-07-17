import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./styles/global.css";
import { WeatherContextProvider } from "./context/weatherContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <WeatherContextProvider>
        <App />
    </WeatherContextProvider>
);
