import React from "react";
import { celcius2fahrenheit } from "../utils/celcius2fahrenheit";

const MiniWeatherCard = ({ date, iconId, temperature, description, unit }) => {
    return (
        <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg text-center">
            <p className="text-base font-medium capitalize mb-2">{date}</p>
            <img
                src={`http://openweathermap.org/img/wn/${iconId}@2x.png`}
                alt={description}
                className="w-14 h-14 mx-auto"
            />
            <div className="text-lg font-bold">
                {unit == "c" ? (
                    <p>{Math.round(temperature)}&deg;C </p>
                ) : (
                    <p>{Math.round(celcius2fahrenheit(temperature))}&deg;F</p>
                )}
            </div>
            <p className="text-sm capitalize">{description}</p>
        </div>
    );
};

export default MiniWeatherCard;
