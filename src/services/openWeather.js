const weatherApiUrl = "https://api.openweathermap.org/data/2.5";
const weatherApiKey = "";
const lang = "pt_br";

export const getWeather = async (location) => {
    try {
        const fetchWeather = await fetch(
            `${weatherApiUrl}/weather?q=${location}&APPID=${weatherApiKey}&lang=${lang} `
        );

        const responseWeather = await fetchWeather.json();
        return responseWeather;
    } catch (error) {
        console.log(error);
    }
};

export const getForecast = async (location) => {
    try {
        const fetchForecast = await fetch(
            `${weatherApiUrl}/forecast?q=${location}&APPID=${weatherApiKey}&lang=${lang} `
        );

        const responseForecast = await fetchForecast.json();
        return responseForecast;
    } catch (error) {
        console.log(error);
    }
};
