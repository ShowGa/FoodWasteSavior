import axios from "axios";

const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_API_KEY = import.meta.env.VITE_CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = import.meta.env.VITE_CLOUDINARY_API_SECRET;
const CLOUDINARY_PRESET = import.meta.env.VITE_CLOUDINARY_PRESET;

const API_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;

class UploadImgService {
  uploadImg(file) {
    return axios.post(API_URL, file);
  }
}

export default new UploadImgService();
