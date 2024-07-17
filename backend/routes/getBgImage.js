export async function getBgImage(app) {
    app.get("/getBgImage", async (request, reply) => {
        const bingAPIUrl =
            "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR";

        try {
            const fetchImage = await fetch(bingAPIUrl);
            const responseImage = await fetchImage.json();
            const imageUrl = `https://www.bing.com${responseImage?.images?.[0]?.url}`;

            return reply.send({ status: "success", imageUrl: imageUrl });
        } catch (error) {
            return reply.status(500).send({
                status: "error",
                message: "Error fetching image URL!",
            });
        }
    });
}
