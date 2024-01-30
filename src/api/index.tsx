import axiosBase from "axios";

const api = axiosBase.create({
  baseURL: "https://randomuser.me/api/",
});

export default api;
