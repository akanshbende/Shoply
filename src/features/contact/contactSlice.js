import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { contactService } from "./contactService";
import { toast } from "react-toastify";

export const createQuery = createAsyncThunk(
  "contact/post",
  async (contactData, thunkAPI) => {
    try {
      return await contactService.postQuery(contactData);
      // console.log("product slice", userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
      // console.log("product slice", error);
    }
  }
);

const contactState = {
  contact: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
export const contactSlice = createSlice({
  name: "contact",
  initialState: contactState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(createQuery.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createQuery.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.contact = action.payload;
        if (state.isSuccess === true) {
          toast.success("Contact Form Subimitted Successfully");
        }
      })
      .addCase(createQuery.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError === true) {
          toast.error("Something went wrong");
        }
      });
  },
});

export default contactSlice.reducer;
