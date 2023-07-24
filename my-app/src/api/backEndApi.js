import axios from "axios";

const backEndApi = axios.create({ 
  baseURL: "https://7f61-102-176-110-143.ngrok-free.app",
});

export { backEndApi };