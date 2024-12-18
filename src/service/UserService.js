import axios from "axios";

const API_URL = "http://localhost:8080/api/user";

class UserService {
  updateUserProfile(userProfile) {
    const token = JSON.parse(localStorage.getItem("auth-user-jwt"));

    return axios.put(API_URL, userProfile, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default new UserService();
