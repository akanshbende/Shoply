import { toast } from "react-toastify";
import { authService } from "./userService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
  "/auth/register",
  async (userData, thunkAPI) => {
    try {
      return await authService.register(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const loginUser = createAsyncThunk(
  "/auth/login",
  async (userData, thunkAPI) => {
    
    try {
      return await authService.login(JSON.stringify(userData));
      console.log(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  user: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdUser = action.payload;
        if (state.isSuccess === true) {
          toast.info("User Created Sucessfully");
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload.toString(); // Convert to a serializable value
        if (state.isError === true) {
          toast.error(action.payload.toString()); // Convert to a serializable value
        }
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
         state.user = action.payload;
 
        if (state.isSuccess === true) {
          localStorage.setItem("token",action.payload.token);
          toast.info("User Logged in Sucessfully");
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload.toString(); // Convert to a serializable value
        if (state.isError === true) {
          toast.error(action.payload.toString()); // Convert to a serializable value
        }
      })
  },
});

export default authSlice.reducer;




