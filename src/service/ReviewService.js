import axios from "axios";

const API_URL = "http://localhost:8080/api/review";

const ReviewService = {
  createReview(data, storeId) {
    const token = JSON.parse(localStorage.getItem("auth-user-jwt"));
    return axios.post(API_URL + `/createreview/${storeId}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

export default ReviewService;
