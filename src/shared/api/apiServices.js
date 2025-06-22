export async function doGet(url, token, header = {}, params = {}) {
    try {
        const queryParams = new URLSearchParams(params).toString();
        const fullUrl = queryParams ? `${url}?${queryParams}` : url;

        const response = await fetch(fullUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${token}`,
                ...header,
            },
        });

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        }

        // Parsear y devolver los datos
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error en la solicitud GET:", error);
        return { error: error.message };
    }
}
export async function doDelete(url, token, header = {}, body = {}) {
    try {
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${token}`,
                ...header,
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error(`Error en la solicitud DELETE: ${response.status} ${response.statusText}`);
        }

        // Parsear y devolver los datos
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error en la solicitud DELETE:", error);
        return { error: error.message };
    }
}

export async function doPost(url, token, header = {}, body = {}) {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${token}`,
                ...header,
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error(`Error en la solicitud POST: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error en la solicitud POST:", error);
        return { error: error.message };
    }
}

export async function doPut(url, token, header = {}, body = {}) {
    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${token}`,
                ...header,
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error(`Error en la solicitud PUT: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error en la solicitud PUT:", error);
        return { error: error.message };
    }
}