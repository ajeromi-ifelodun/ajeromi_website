
import axios from "axios";

export type ContentType = "form" | "json";
export const axiosInstance = axios.create({
  baseURL: `http://localhost:3000/api/`,
  headers: { Accept: "application/json", "Content-type": "application/json" },
});
