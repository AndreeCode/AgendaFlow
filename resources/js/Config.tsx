

import axios from "axios";

const base_api_url = "http://127.0.0.1:8000/api";

export default {
  getLogin: (data: { email: string; password: string }) =>
    axios.post(`${base_api_url}/auth/login`, data),
}
