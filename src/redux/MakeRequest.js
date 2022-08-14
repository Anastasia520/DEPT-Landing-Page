import * as axios from "axios";

export const makeRequest = async (data, url, method) => {
  return axios(url, {
    method: method,
    data: data,
  });
};
