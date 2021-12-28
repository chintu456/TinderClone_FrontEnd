import axios from "axios";
const instance = axios.create({
  baseURL: "https://backendd-tinderr.herokuapp.com/",
});
export default instance;
