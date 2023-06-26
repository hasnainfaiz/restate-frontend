import axios from "axios";
import { AUTH_TOKEN } from "../constants";

axios.defaults.baseURL = 'https://localhost:3000';

export const apis = {
  login: () => axios.post("auth/login"),
};

const getAuthHeader = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem(AUTH_TOKEN)}` },
});
