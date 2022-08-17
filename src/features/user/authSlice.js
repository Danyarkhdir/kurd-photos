import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  isAuth: false,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload;
      state.isAuth = true;
      localStorage.setItem("username", action.payload);
      localStorage.setItem("auth", true);
    },
    logout: (state) => {
      state.username = "";
      state.isAuth = false;
      localStorage.removeItem("username");
      localStorage.removeItem("auth");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
