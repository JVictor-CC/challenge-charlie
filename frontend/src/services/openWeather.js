export const getWeather = async (location) => {
    try {
        const fetchWeather = await fetch(
            `http://localhost:3000/getWeather/${location}`,
            {
                method: "GET",
                credentials: "include",
            }
        );

        const responseWeather = await fetchWeather.json();
        return responseWeather;
    } catch (error) {
        console.log(error);
        return {
            status: "error",
            message: error.message || "Erro ao obter previsão do tempo",
        };
    }
};

export const getForecast = async (location) => {
    try {
        const fetchForecast = await fetch(
            `http://localhost:3000/getForecast/${location}`,
            {
                method: "GET",
                credentials: "include",
            }
        );

        const responseForecast = await fetchForecast.json();
        return responseForecast;
    } catch (error) {
        console.log(error);
        return {
            status: "error",
            message: error.message || "Erro ao obter previsão do tempo",
        };
    }
};
