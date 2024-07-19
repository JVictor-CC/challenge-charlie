export async function getLocation(app) {
    app.get("/getLocation", async (request, reply) => {
        let { ip } = request.ip;

        try {
            const fetchLocation = await fetch(`http://ip-api.com/json/${ip}`);
            const response = await fetchLocation.json();
            if (response?.status !== "fail") {
                return reply.send({ status: "success", data: response.city });
            } else {
                reply.status(500).send({
                    status: "error",
                    message: response.message,
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
