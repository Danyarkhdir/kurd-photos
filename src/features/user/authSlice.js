import { createSlice } from "@reduxjs/toolkit";

const currentUsername = localStorage.getItem("username") || "";
const initialState = {
  username: currentUsername,
  isAuthenticated: currentUsername !== "",
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.username = action.payload;
      localStorage.setItem("username", action.payload);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.username = "";
      localStorage.removeItem("username");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
