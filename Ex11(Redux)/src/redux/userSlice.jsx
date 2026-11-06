import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  loading: false,
};

export const getAllUsers = createAsyncThunk("users", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users",
  );
  return response.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  //HTTP istegi olmazsa kullanilmaz
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
  //HTTP istegi icin kullanilir
});
//export const {} = userSlice.actions;

export default userSlice.reducer;
