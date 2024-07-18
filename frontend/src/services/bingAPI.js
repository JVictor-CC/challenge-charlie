const beckupImage =
    "https://www.bing.com/th?id=OHR.TateishiPark_PT-BR0601453659_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp";

export const getBingImage = async () => {
    try {
        const fetchImage = await fetch("http://localhost:3000/getBgImage", {
            method: "GET",
            credentials: "include",
        });
        const responseImage = await fetchImage.json();
        if (responseImage.status == "success") {
            return responseImage.imageUrl;
        } else {
            return beckupImage;
        }
    } catch (error) {
        console.log(error);
        return beckupImage;
    }
};
