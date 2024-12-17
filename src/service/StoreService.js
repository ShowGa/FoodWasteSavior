import axios from "axios";

const API_URL = "http://localhost:8080/api/stores";

class StoreService {
  getStoreDataByPosition(position) {
    const token = localStorage.getItem("auth-user-jwt");

    return axios.get(
      API_URL +
        `/findstorewithdistance?latitude=${position.latitude}&longitude=${position.longitude}&radius=${position.radius}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
}

export default new StoreService();
