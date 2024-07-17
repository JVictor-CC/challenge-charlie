import { useContext, createContext, useEffect, useState } from "react";
import { getWeather, getForecast } from "../services/openWeather";
import { getBingImage } from "../services/bingAPI";

const WeatherContext = createContext();

export const WeatherContextProvider = ({ children }) => {
    const [weather, setWeather] = useState({});
    const [forecast, setForecast] = useState([]);
    const [location, setLocation] = useState("rio de janeiro");
    const [bgImage, setBgImage] = useState("");
    const [unit, setUnit] = useState("c");

    useEffect(() => {
        getWeather(location).then((response) => setWeather(response));
        getForecast(location).then((response) => {
            const dailyForecast = response?.list
                .filter((_, index) => index % 8 === 0)
                .slice(1, 5);
            setForecast(dailyForecast);
        });
    }, [location]);

    useEffect(() => {
        console.log(weather);
        console.log(forecast);
    }, [weather, forecast]);

    return (
        <WeatherContext.Provider
            value={{
                weather,
                forecast,
                setLocation,
                location,
                unit,
                setUnit,
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
};

export const useWeatherContext = () => useContext(WeatherContext);
