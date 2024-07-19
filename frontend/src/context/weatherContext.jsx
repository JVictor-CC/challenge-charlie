import { useContext, createContext, useEffect, useState } from "react";
import { getWeather, getForecast } from "../services/openWeather";
import { getBingImage } from "../services/bingAPI";
import { getUserLocation } from "../services/location";
import toast from "react-hot-toast";

const WeatherContext = createContext();

export const WeatherContextProvider = ({ children }) => {
    const [weather, setWeather] = useState({});
    const [forecast, setForecast] = useState([]);
    const [location, setLocation] = useState("");
    const [bgImage, setBgImage] = useState("");
    const [unit, setUnit] = useState("c");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setBgImage(
            "https://www.bing.com/th?id=OHR.TateishiPark_PT-BR0601453659_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"
        );
        getBingImage().then((response) => setBgImage(response));
        getUserLocation().then((response) => {
            if (response?.status !== "error") {
                setLocation(response?.data);
            }
        });
    }, []);

    useEffect(() => {
        const fetchWeatherData = async () => {
            setLoading(true);
            setError(false);

            if (location) {
                const [weatherResponse, forecastResponse] = await Promise.all([
                    getWeather(location),
                    getForecast(location),
                ]);

                if (
                    weatherResponse.status !== "error" &&
                    forecastResponse.status !== "error"
                ) {
                    setWeather(weatherResponse?.data);
                    setForecast(forecastResponse?.data);
                    toast.success("Informações carregadas com sucesso!", {
                        position: "bottom-right",
                    });
                } else {
                    const errorMessage =
                        weatherResponse.status === "error"
                            ? weatherResponse.message
                            : forecastResponse.message;
                    toast.error(errorMessage, {
                        position: "bottom-right",
                    });
                    setError(true);
                }
            }
            setLoading(false);
        };

        fetchWeatherData();
    }, [location]);

    return (
        <WeatherContext.Provider
            value={{
                weather,
                forecast,
                setLocation,
                location,
                unit,
                setUnit,
                bgImage,
                loading,
                error,
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
};

export const useWeatherContext = () => useContext(WeatherContext);
