import axios from "axios";

const API_URL = "http://localhost:8080/api/address";

class AddressService {
  getAddressByPosition(position) {
    const token = JSON.parse(localStorage.getItem("auth-user-jwt"));

    return axios.post(API_URL + `/user-change-position`, position, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default new AddressService();
