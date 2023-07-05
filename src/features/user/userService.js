import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const register = async (userData) => {
  // console.log(`${base_url}user/register`);
  const response = await axios.post(`${base_url}user/register`, userData);
  // console.log(userData);
  // console.log(response);
  if (response.data) {
    return response.data;
  }
};
const login = async (userData) => {
  const response = await axios.post(`${base_url}user/login`, userData);
  console.log(userData);
  // console.log(response);
  if (response.data) {
    if (response.data) {
      localStorage.setItem("customer", JSON.stringify(response.data));
    }
    return response.data;
  }
};

const getUserWishlist = async () => {
  const response = await axios.get(`${base_url}user/wishlist`, config);

  // console.log(response);
  if (response.data) {
    return response.data;
  }
};

const addToCart = async (cartData) => {
  const response = await axios.post(`${base_url}user/cart`, cartData, config);

  // console.log(response);
  if (response.data) {
    return response.data;
  }
};

const getCart = async () => {
  const response = await axios.get(`${base_url}user/cart`, config);

  // console.log(response);
  if (response.data) {
    return response.data;
  }
};

const removeProductFromCart = async (cartItemId) => {
  // console.log(id);
  const response = await axios.delete(
    `${base_url}user/delete-product-cart/${cartItemId}`,
    config
  );

  // console.log(response);
  if (response.data) {
    return response.data;
  }
};

export const authService = {
  register,
  login,
  getUserWishlist,
  addToCart,
  getCart,
  removeProductFromCart,
};
