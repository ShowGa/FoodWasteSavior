import { data } from "autoprefixer";
import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";

class AuthService {
  firebaseGoogleOAuth(data) {
    return axios.post(API_URL + "/googleoauth", data, {
      withCredentials: true,
    });
  }
}

export default new AuthService();
