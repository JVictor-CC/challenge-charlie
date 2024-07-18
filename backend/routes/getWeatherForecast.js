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

            if (responseWeather?.cod == 200) {
                return reply.send({ status: "success", data: responseWeather });
            } else {
                return reply.send({
                    status: "error",
                    message: responseWeather.message,
                });
            }
        } catch (error) {
            reply.status(500).send({
                status: "error",
                message: error.message,
            });
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

            if (responseForecast?.cod == 200) {
                const dailyForecast = responseForecast?.list
                    .filter((_, index) => index % 8 === 0)
                    .slice(1, 5);
                return reply.send({ status: "success", data: dailyForecast });
            } else {
                return reply.send({
                    status: "error",
                    message: responseForecast.message,
                });
            }
        } catch (error) {
            reply.status(500).send({
                status: "error",
                message: error.message,
            });
        }
    });
}
