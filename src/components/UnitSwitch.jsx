import React from "react";
import { TbTemperatureCelsius, TbTemperatureFahrenheit } from "react-icons/tb";
import { useWeatherContext } from "../context/weatherContext";

const UnitSwitch = () => {
    const { unit, setUnit } = useWeatherContext();
    const handleUnitChange = () => {
        setUnit((prevUnit) => (prevUnit === "c" ? "f" : "c"));
    };

    return (
        <label className="relative bg-white w-11 h-6 rounded-full cursor-pointer">
            <legend className="sr-only">
                Alteração de unidade de temperatura.
            </legend>
            <input
                type="checkbox"
                id="unitSwitch"
                className="sr-only peer"
                onChange={handleUnitChange}
            />
            <span className="text-base flex items-center justify-center w-2/5 h-4/5 bg-amber-400 absolute rounded-full left-[3px] top-[2px] peer-checked:bg-amber-600 peer-checked:left-6 transition-all duration-300">
                {unit === "c" ? (
                    <TbTemperatureCelsius />
                ) : (
                    <TbTemperatureFahrenheit />
                )}
            </span>
        </label>
    );
};

export default UnitSwitch;
