import axios from "axios";

const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/discover/movie",
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

export default instance;