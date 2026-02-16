import Axios from "axios";

const base_Url = import.meta.env.VITE_BASE_URL;

export function signUp(formData: {
  name: string;
  email: string;
  password: string;
}) {
  return Axios.post(`${base_Url}/auth/signup`, formData)
    .then((response) => response.data)
    .catch((error) => {
      console.error("error", error);
      throw error;
    });
}

export function login(formData: {
  email: string;
  password: string;
}) {
  return Axios.post(`${base_Url}/auth/login`, formData)
    .then((response) => response.data)
    .catch((error) => {
      console.error("error", error);
      throw error;
    });
}
