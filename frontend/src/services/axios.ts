import axios from "axios";

const instance = axios.create({
  baseURL: "https://candidate-assignment.neversitup.com",
});

export default instance;
