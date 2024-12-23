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

  getOrderList(userId) {
    const token = JSON.parse(localStorage.getItem("auth-user-jwt"));
    return axios.get(API_URL + `/user-order-list/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getOrderDetail(orderId) {
    const token = JSON.parse(localStorage.getItem("auth-user-jwt"));
    return axios.get(API_URL + `/order-detail/${orderId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  completeOrder(orderId) {
    const token = JSON.parse(localStorage.getItem("auth-user-jwt"));
    return axios.patch(
      API_URL + `/completetheorder/${orderId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }

  getOrderHistoryList() {
    const token = JSON.parse(localStorage.getItem("auth-user-jwt"));
    return axios.get(API_URL + `/user-order-history-list`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getOrderHistoryDetail(orderId) {
    const token = JSON.parse(localStorage.getItem("auth-user-jwt"));
    return axios.get(API_URL + `/order-history-detail/${orderId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default new OrderService();
