import axios from "axios";

export async function doGet(url, token, header = {}, params = {}) {
  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
        ...header,
      },
      params,
    });
    return response.data;
  } catch (error) {
    console.error("Error en la solicitud GET:", error);
    return { error: error.message };
  }
}

export async function doDelete(url, token, header = {}, body = {}) {
  try {
    const response = await axios.delete(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
        ...header,
      },
      data: body,
    });
    return response.data;
  } catch (error) {
    console.error("Error en la solicitud DELETE:", error);
    return { error: error.message };
  }
}

export async function doPost(url, token, header = {}, body = {}) {
  try {
    const response = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
        ...header,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error en la solicitud POST:", error);
    return { error: error.message };
  }
}

export async function doPut(url, token, header = {}, body = {}) {
  try {
    const response = await axios.put(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
        ...header,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error en la solicitud PUT:", error);
    return { error: error.message };
  }
}