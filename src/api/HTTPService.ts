import axios from "axios";

export const HttpService = () =>
  axios.create({
    headers: {
      Accept: "application/json",
    },
  });
