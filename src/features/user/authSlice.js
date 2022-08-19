import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.username = action.payload;
      console.log(`User: ${state.username} logged in`);
      localStorage.setItem("username", action.payload);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      console.log(`User: ${state.username} logged out`);
      state.username = "";
      localStorage.removeItem("username");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
