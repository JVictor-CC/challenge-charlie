import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useWeatherContext } from "../context/weatherContext";

const LocationInput = () => {
    const { setLocation } = useWeatherContext();

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            setLocation(event.target.value);
        }
    };

    return (
        <div className="w-8/12 justify-center items-center text-slate-400 bg-white overflow-hidden shadow-2xl rounded gap-2 px-2 hidden sm:flex">
            <HiMagnifyingGlass className="text-2xl" />
            <label htmlFor="location" className="sr-only">
                Digite a localização desejada.
            </label>
            <input
                type="text"
                className="h-9 w-full leading-none outline-none text-lg"
                id="location"
                placeholder="Digite a localização desejada..."
                aria-label="Localizar"
                onKeyDown={handleKeyDown}
            />
        </div>
    );
};

export default LocationInput;
