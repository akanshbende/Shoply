import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { blogService } from "./blogService";

export const getAllBlogs = createAsyncThunk("blogs/get", async (thunkAPI) => {
  try {
    return await blogService.getBlogs();
    // console.log("product slice", userData);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
    // console.log("product slice", error);
  }
});
export const getABlog = createAsyncThunk("blog/get", async (id, thunkAPI) => {
  try {
    return await blogService.getBlog(id);
    // console.log("product slice", userData);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
    // console.log("product slice", error);
  }
});

const blogState = {
  blog: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
export const blogSlice = createSlice({
  name: "blog",
  initialState: blogState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getAllBlogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBlogs.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.blog = action.payload;
      })
      .addCase(getAllBlogs.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getABlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getABlog.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.singleBlog = action.payload;
      })
      .addCase(getABlog.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default blogSlice.reducer;
