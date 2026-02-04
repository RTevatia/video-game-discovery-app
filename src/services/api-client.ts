import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e06a1afea1d94221994b75d0b41d06fb",
  },
});
