import axios from "axios";

const Api = axios.create({
  baseURL: "https://backend-super-player.herokuapp.com",
});

export default Api;
