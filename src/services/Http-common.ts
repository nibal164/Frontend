import axios from "axios";

export const HttpCommon = axios.create({
  baseURL: "https://localhost:7041/",
  headers: {
    "Content-type": "application/json",
  },
});
