import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/user/authSlice";
export default configureStore({
  reducer: {
    user: authSlice,
  },
});
