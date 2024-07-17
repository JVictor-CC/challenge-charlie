import "dotenv/config";

const weatherApiUrl = "https://api.openweathermap.org/data/2.5";
const weatherApiKey = process.env.OPENWEATHERAPIKEY;
const lang = "pt_br";
const unit = "metric";

export async function getWeather(app) {
    app.get("/getWeather/:location", async (request, reply) => {
        const { location } = request.params;
        try {
            const fetchWeather = await fetch(
                `${weatherApiUrl}/weather?q=${location}&APPID=${weatherApiKey}&lang=${lang}&units=${unit}`
            );

            const responseWeather = await fetchWeather.json();
            return responseWeather;
        } catch (error) {
            console.log(error);
        }
    });
}

export async function getForecast(app) {
    app.get("/getForecast/:location", async (request, reply) => {
        const { location } = request.params;
        try {
            const fetchForecast = await fetch(
                `${weatherApiUrl}/forecast?q=${location}&APPID=${weatherApiKey}&lang=${lang}&units=${unit}`
            );

            const responseForecast = await fetchForecast.json();
            return responseForecast;
        } catch (error) {
            console.log(error);
        }
    });
}
