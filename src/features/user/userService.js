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
  // console.log(userData);
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

const getCart = async (data) => {
  console.log(data);
  const response = await axios.get(`${base_url}user/cart`, data);
  console.log(response.data);
  // console.log(response);
  if (response.data) {
    return response.data;
  }
};

const removeProductFromCart = async (data) => {
  // console.log(id);
  console.log(data);
  const response = await axios.delete(
    `${base_url}user/delete-product-cart/${data.idNew}`,
    data.configNew
  );

  // console.log(response);
  if (response.data) {
    return response.data;
  }
};
const updateProductFromCart = async (cartDetail) => {
  // console.log(id);
  const response = await axios.delete(
    `${base_url}user/update-product-cart/${cartDetail.cartItemId}/${cartDetail.quantity}`,
    config
  );

  // console.log(response);
  if (response.data) {
    return response.data;
  }
};
const createOrder = async (orderDetail) => {
  // console.log(id);
  const response = await axios.post(
    `${base_url}user/cart/create-order`,
    orderDetail,
    config
  );

  // console.log(response);
  if (response.data) {
    return response.data;
  }
};
const getUserOrders = async () => {
  // console.log(id);
  const response = await axios.get(`${base_url}user/getmyorders`, config);

  // console.log(response);
  if (response.data) {
    return response.data;
  }
};
const updateUser = async (data) => {
  // console.log(id);
  console.log(data.data);
  console.log(data.config2_);
  // localStorage.removeItem("customer");
  const response = await axios.put(
    `${base_url}user/edit-user`,
    data.data,
    data.config2_
  );
  // console.log(response);
  // console.log(response.data);
  if (response.data) {
    // if (response.data) {
    //   localStorage.setItem("customer", JSON.stringify(response.data));
    // }
    return response.data;
  }
};
const forgotPassToken = async (data) => {
  // console.log(id);
  console.log(data);
  // localStorage.removeItem("customer");
  const response = await axios.post(
    `${base_url}user/forgot-password-token`,
    data
  );
  console.log(response);
  console.log(response.data);
  if (response.data) {
    // if (response.data) {
    //   localStorage.setItem("customer", JSON.stringify(response.data));
    // }
    return response.data;
  }
};
const resetPass = async (data) => {
  // console.log(`${base_url}user/reset-password/${data.token}`);
  const response = await axios.put(
    `${base_url}user/reset-password/${data.token}`,
    { password: data?.password }
  );

  if (response.data) {
    return response.data;
  }
};

const emptyCart = async (data) => {
  // console.log(`${base_url}user/reset-password/${data.token}`);
  const response = await axios.delete(`${base_url}user/empty-cart`, data);

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
  updateProductFromCart,
  createOrder,
  getUserOrders,
  updateUser,
  forgotPassToken,
  resetPass,
  emptyCart,
};
