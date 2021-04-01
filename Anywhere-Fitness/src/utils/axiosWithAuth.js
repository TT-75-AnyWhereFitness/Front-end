import axios from "axios";

export default function axiosWithAuth() {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://tt75-anywhere-fitness.herokuapp.com",
    headers: {
      authorization: token,
    },
  });
}
