import axios from "axios";

const API_URL = "http://localhost:8080/api/favorite";

class FavoriteService {
  updateFavorite(packageId) {
    const token = JSON.parse(localStorage.getItem("auth-user-jwt"));

    return axios.put(
      API_URL + `/update/${packageId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
}

export default new FavoriteService();
