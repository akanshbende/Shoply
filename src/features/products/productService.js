import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";
// console.log(config);
const getProducts = async () => {
  const response = await axios.get(`${base_url}product`);

  if (response.data) {
    return response.data;
  }
};
const getSingleProduct = async (id) => {
  const response = await axios.get(`${base_url}product/${id}`);

  if (response.data) {
    return response.data;
  }
};

const addToWishlist = async (prodId) => {
  // console.log(`${base_url}product/wishlist`);
  const response = await axios.put(
    `${base_url}product/wishlist`,
    { prodId },
    config
  );
  console.log(response);

  if (response.data) {
    // console.log(response.data);
    return response.data;
  }
};

export const productService = {
  getProducts,
  addToWishlist,
  getSingleProduct,
};
