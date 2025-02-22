
import axios from "axios";


export type ContentType = "form" | "json";
export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASEURL,
  headers: { Accept: "application/json", "Content-type": "application/json" },
});
