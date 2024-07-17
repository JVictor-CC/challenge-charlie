import Fastify from "fastify";
import { getBgImage } from "./routes/getBgImage.js";
import { getWeather, getForecast } from "./routes/getWeatherForecast.js";
import cors from "@fastify/cors";

const app = Fastify({
    logger: true,
});

await app.register(cors, {
    origin: ["http://localhost:9000"],
    methods: ["GET", "POST"],
    credentials: true,
});

app.register(getBgImage);
app.register(getWeather);
app.register(getForecast);

// Run the server!
try {
    await app.listen({ port: 3000 });
} catch (err) {
    app.log.error(err);
    process.exit(1);
}
