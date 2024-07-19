export const getUserLocation = async () => {
    try {
        const fetchIpAddress = await fetch(
            "http://localhost:3000/getLocation",
            {
                method: "GET",
                credentials: "include",
            }
        );
        const response = await fetchIpAddress.json();
        return response;
    } catch (error) {
        return {
            status: "error",
            message: error.message || "Erro ao obter localização",
        };
    }
};
