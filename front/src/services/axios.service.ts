import axios from "axios";

export const request = axios.create({
  baseURL: "https://localhost:3000/",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});
