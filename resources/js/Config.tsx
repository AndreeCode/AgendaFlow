
import axios from "axios";

const base_api_url = "http://127.0.0.1:8000/api";

export default {
  getLogin: (data) =>axios.post(`${base_api_url}/auth/login`, data),
  getLogout: () => {
  const token = JSON.parse(sessionStorage.getItem('token'));
  return axios.post(`${base_api_url}/auth/logout`, {}, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
},
}
