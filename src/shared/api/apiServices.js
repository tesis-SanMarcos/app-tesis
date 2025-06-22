import axios from "axios";

export function doGet(url, token, header = {}, params = {}) {
  return axios({
    url,
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
      ...header,
    },
    params: params,
  })
    .catch((error) => {
      console.log(error);
    })
    .then((response) => {
      return response;
    });
}
