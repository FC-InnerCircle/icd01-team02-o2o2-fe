import axios from "axios";

const instance = axios.create({
  baseURL: `basic url`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache, no-store, must-revalidate",
  },
});

export default instance;
