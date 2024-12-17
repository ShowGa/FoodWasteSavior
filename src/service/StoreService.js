import axios from "axios";

const API_URL = "http://localhost:8080/api/stores";

class StoreService {
  // search page find storecard info
  getStoreDataByPosition(position) {
    const token = JSON.parse(localStorage.getItem("auth-user-jwt"));

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

  // store detail page find store detail
  getStoreDetail(storeId) {
    const token = JSON.parse(localStorage.getItem("auth-user-jwt"));

    return axios.get(API_URL + `/storedetail/${storeId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default new StoreService();
