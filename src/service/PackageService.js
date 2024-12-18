import axios from "axios";

const API_URL = "http://localhost:8080/api/package";

class PackageService {
  getStoreDetailPackageCard(storeId) {
    const token = JSON.parse(localStorage.getItem("auth-user-jwt"));

    return axios.get(API_URL + `/storedetail-packagecard/${storeId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getPackageDetail(packageId) {
    const token = JSON.parse(localStorage.getItem("auth-user-jwt"));

    return axios.get(API_URL + `/packagedetail/${packageId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default new PackageService();
