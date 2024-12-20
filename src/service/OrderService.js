import axios from "axios";

const API_URL = "http://localhost:8080/api/order";

class OrderService {
  getUserContribution(userId) {
    const token = JSON.parse(localStorage.getItem("auth-user-jwt"));
    return axios.get(API_URL + `/user-contribution/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  createOrder(orderData) {
    const token = JSON.parse(localStorage.getItem("auth-user-jwt"));
    return axios.post(API_URL + "/createorder", orderData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default new OrderService();
