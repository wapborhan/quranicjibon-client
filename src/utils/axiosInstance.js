import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.API_URL, // Set your base URL here
  timeout: 10000, // Optional: set a timeout
  headers: {
    "Content-Type": "application/json",
    // Add any other default headers here
  },
});

export default axiosInstance;
