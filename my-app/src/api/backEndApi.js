import axios from "axios";

const backEndApi = axios.create({ 
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-type": "application/json"
  }
  // responseType: "json",
  // withCredentials: true
});

export { backEndApi };