import React, { useState } from "react";
import logo from "../assets/logo.png";
import LocationInput from "./LocationInput";
import UnitSwitch from "./UnitSwitch";

const Navbar = () => {
    return (
        <nav className="w-full min-h-14 bg-black bg-opacity-60 text-white px-10 flex justify-between items-center absolute z-10">
            <img className="h-10" src={logo} alt="Weather Web logo" />
            <LocationInput />
            <div className="flex items-center text-2xl">
                <UnitSwitch />
            </div>
        </nav>
    );
};

export default Navbar;
