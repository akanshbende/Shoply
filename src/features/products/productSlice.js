import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productService } from "./productService";
import { toast } from "react-toastify";

export const getAllProducts = createAsyncThunk(
  "product/get",
  async (thunkAPI) => {
    try {
      return await productService.getProducts();
      // console.log("product slice", userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
      // console.log("product slice", error);
    }
  }
);
export const addTooWishlist = createAsyncThunk(
  "product/wishlist",
  async (prodId, thunkAPI) => {
    try {
      return await productService.addToWishlist(prodId);
      // console.log("product slice", userData);
      // console.log("Product added to wishlist");
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
      // console.log("product slice", error);
    }
  }
);
export const getAProduct = createAsyncThunk(
  "product/getAProduct",
  async (id, thunkAPI) => {
    try {
      return await productService.getSingleProduct(id);
      // console.log("product slice", userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
      // console.log("product slice", error);
    }
  }
);

const productState = {
  product: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
export const productSlice = createSlice({
  name: "product",
  initialState: productState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.product = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(addTooWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTooWishlist.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.addTooWishlist = action.payload;
        state.message = "Product added to Wishlist !";
        if (state.isSuccess === true) {
          toast.success(state.message);
        }
      })
      .addCase(addTooWishlist.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError === true) {
          toast.error(state.message);
        }
      })
      .addCase(getAProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAProduct.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.singleproduct = action.payload;
        state.message = "Product Fetched Sucessfully !";
      })
      .addCase(getAProduct.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default productSlice.reducer;
