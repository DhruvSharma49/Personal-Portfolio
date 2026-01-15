import axios from "axios";

const backendURL=import.meta.env.VITE_Backend_URL
const API = axios.create({
  baseURL: backendURL, 
});



export default API;
