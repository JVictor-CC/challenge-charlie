import React from "react";
import { celcius2fahrenheit } from "../utils/celcius2fahrenheit";

import {
    TbTemperatureCelsius,
    TbTemperatureFahrenheit,
    TbGauge,
} from "react-icons/tb";
import { LuWind } from "react-icons/lu";
import { WiHumidity } from "react-icons/wi";
import { BsFillCloudsFill } from "react-icons/bs";

const WeatherInfoCard = ({
    location,
    description,
    iconId,
    temperature,
    unit,
    windspeed,
    humidity,
    pressure,
    clouds,
}) => {
    const currentDate = new Date().toLocaleDateString("pt-BR", {
        weekday: "long",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="text-white min-w-96">
            <h1 className="text-3xl font-bold mb-2 capitalize text-center">
                {location}
            </h1>
            <h2 className="text-center">{currentDate}</h2>
            <hr class="h-px mb-8 mt-2 bg-gray-200 border-0 dark:bg-gray-700" />
            <div className="flex justify-around items-center my-4">
                <div className="flex text-5xl font-bold">
                    {unit == "c" ? (
                        <p>{Math.round(temperature)}&deg;C </p>
                    ) : (
                        <p>
                            {Math.round(celcius2fahrenheit(temperature))}&deg;F
                        </p>
                    )}
                </div>
                <div className="flex items-center mb-2">
                    <img
                        src={`http://openweathermap.org/img/wn/${iconId}@2x.png`}
                        alt={description}
                        className="w-12 h-12"
                    />
                    <p className="ml-2 text-lg capitalize">{description}</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div className="bg-gray-800 bg-opacity-70 p-2 rounded flex justify-around items-center">
                    <div>
                        <p className="font-bold">Wind</p>
                        <p>{windspeed} m/s</p>
                    </div>
                    <LuWind className="text-2xl" />
                </div>
                <div className="bg-gray-800 bg-opacity-70 p-2 rounded flex justify-around items-center">
                    <div>
                        <p className="font-bold flex justify-around items-center">
                            Humidity
                        </p>
                        <p>{humidity}%</p>
                    </div>
                    <WiHumidity className="text-3xl" />
                </div>
                <div className="bg-gray-800 bg-opacity-70 p-2 rounded flex justify-around items-center">
                    <div>
                        <p className="font-bold flex justify-around items-center">
                            Pressure
                        </p>
                        <p>{pressure} hPa</p>
                    </div>
                    <TbGauge className="text-2xl" />
                </div>
                <div className="bg-gray-800 bg-opacity-70 p-2 rounded flex justify-around items-center">
                    <div>
                        <p className="font-bold flex justify-around items-center">
                            Clouds
                        </p>
                        <p>{clouds}%</p>
                    </div>
                    <BsFillCloudsFill className="text-2xl" />
                </div>
            </div>
        </div>
    );
};
export default WeatherInfoCard;
