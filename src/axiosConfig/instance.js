import axios from "axios";
const API_KEI = import.meta.env.VITE_API_KEY;
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: API_KEI,
  }
});

export default instance;