import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";
// console.log(config);
const getProducts = async (data) => {
  const response = await axios.get(
    `${base_url}product?${data?.brand ? `brand=${data?.brand}&&` : ""}${
      data?.tag ? `tag=${data?.tag}&&` : ""
    }${data?.category ? `category=${data?.category}&&` : ""}${
      data?.minPrice ? `price[gte]=${data?.minPrice}&&` : ""
    }${data?.maxPrice ? `price[lte]=${data?.maxPrice}&&` : ""}${
      data?.sort ? `sort=${data?.sort}&&` : ""
    }`
  );

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
const rateProduct = async (data) => {
  // console.log(`${base_url}product/wishlist`);
  console.log(data);
  const response = await axios.put(`${base_url}product/rating`, data, config);
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
  rateProduct,
};
