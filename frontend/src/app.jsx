import React from "react";
import Navbar from "./components/Navbar";
import WeatherInfoCard from "./components/WeatherCard";
import MiniWeatherCard from "./components/MiniWeatherCard";
import { useWeatherContext } from "./context/weatherContext";
import { Triangle } from "react-loader-spinner";

const App = () => {
    const { weather, forecast, location, unit, bgImage, loading, error } =
        useWeatherContext();
    const days = [
        "amanhã",
        "depois de amanhã",
        "daqui a 3 dias",
        "daqui a 4 dias",
    ];

    const errorDisplay = Array(4).fill(0);

    const divStyle = {
        backgroundImage: `url(${bgImage})`,
    };

    return (
        <>
            <div className="absolute inset-0 w-full h-full">
                <div
                    className="bg-cover bg-center w-full h-full"
                    style={divStyle}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
            <Navbar />
            <main className="relative h-screen w-full flex items-center justify-center">
                <section className="flex gap-24 flex-wrap">
                    <div className="min-h-96 min-w-96 bg-black bg-opacity-70 p-4 rounded-lg shadow-lg">
                        {loading ? (
                            <div className="w-full h-full flex justify-center items-center opacity-50">
                                <Triangle
                                    width={200}
                                    height={200}
                                    color="#fbbf24"
                                />
                            </div>
                        ) : error ? (
                            <WeatherInfoCard
                                location={"---"}
                                description={"---"}
                                iconId={"---"}
                                temperature={"---"}
                                unit={"---"}
                                windspeed={"---"}
                                humidity={"---"}
                                pressure={"---"}
                                clouds={"---"}
                            />
                        ) : (
                            <WeatherInfoCard
                                location={location}
                                description={weather?.weather?.[0]?.description}
                                iconId={weather?.weather?.[0]?.icon}
                                temperature={weather?.main?.temp}
                                unit={unit}
                                windspeed={weather?.wind?.speed}
                                humidity={weather?.main?.humidity}
                                pressure={weather?.main?.pressure}
                                clouds={weather?.clouds?.all}
                            />
                        )}
                    </div>
                    <div className="min-h-96 min-w-96 text-white bg-black bg-opacity-70 p-4 rounded-lg shadow-lg">
                        {loading ? (
                            <div className="w-full h-full flex justify-center items-center opacity-50">
                                <Triangle
                                    width={200}
                                    height={200}
                                    color="#fbbf24"
                                />
                            </div>
                        ) : error ? (
                            <>
                                <h3 className="text-xl font-bold mb-2">
                                    Próximos Dias
                                </h3>
                                <div className="grid grid-cols-2 gap-2 grid-rows-2">
                                    {errorDisplay.map((index) => (
                                        <MiniWeatherCard
                                            key={index}
                                            date={"---"}
                                            iconId={"---"}
                                            temperature={"---"}
                                            unit={"---"}
                                            description={"---"}
                                        />
                                    ))}
                                </div>
                            </>
                        ) : (
                            <>
                                <h3 className="text-xl font-bold mb-2">
                                    Próximos Dias
                                </h3>
                                <div className="grid grid-cols-2 gap-2 grid-rows-2">
                                    {forecast.map((curr, index) => (
                                        <MiniWeatherCard
                                            key={index}
                                            date={days[index]}
                                            iconId={curr.weather[0].icon}
                                            temperature={curr.main.temp}
                                            unit={unit}
                                            description={
                                                curr.weather[0].description
                                            }
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </section>
            </main>
        </>
    );
};

export default App;
